const API_BASE_URL = process.env.REACT_APP_API_URL || "https://dashboard-api-coral.vercel.app"; // Cambia con tu URL real

// Función para hacer solicitudes API con la validación de token
const fetchData = async (endpoint, options = {}) => {
  try {
    const token = localStorage.getItem("token"); // Obtener el token del localStorage

    // Si es necesario un token (por ejemplo, para rutas protegidas), lo agregamos en los encabezados
    const headers = {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` }), // Solo agregar Authorization si el token existe
    };

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: headers,
      ...options,
    });

    // Corregir la construcción del mensaje de error
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);  // Mensaje de error bien formateado
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

// Función para hacer login y obtener el token
export const login = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, { // Corregir la URL con las comillas invertidas
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Token JWT recibido:", data.token);
      localStorage.setItem("token", data.token); // Guardar token en localStorage
    } else {
      console.error("Error en login:", data.error);
    }
  } catch (error) {
    console.error("Error en login:", error);
  }
};

// :small_blue_diamond: GET (Obtener todas las métricas)
export const getData = async () => {
  return await fetchData("get-metrics");
};

// :small_blue_diamond: POST (Agregar una métrica)
export const postData = async (data) => {
  return await fetchData("add-metric", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// :small_blue_diamond: PUT (Actualizar una métrica existente)
export const putData = async (name, data) => {
  return await fetchData(`update-metric/${name}`, {  // Corregir endpoint con comillas invertidas
    method: "PUT",
    body: JSON.stringify({ values: data }),
  });
};

// :small_blue_diamond: DELETE (Eliminar una métrica)
export const deleteData = async (name) => {
  return await fetchData(`delete-metric/${name}`, { method: "DELETE" });  // Corregir endpoint con comillas invertidas
};
