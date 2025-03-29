const API_BASE_URL = process.env.REACT_APP_API_URL || "https://dashboard-api-coral.vercel.app/"; // Cambia con tu URL real

const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: { "Content-Type": "application/json" },
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

// 🔹 GET (Obtener todas las métricas)
export const getData = async () => {
  return await fetchData("get-metrics");
};

// 🔹 POST (Agregar una métrica)
export const postData = async (data) => {
  return await fetchData("add-metric", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// 🔹 PUT (Actualizar una métrica existente)
export const putData = async (name, data) => {
  return await fetchData(`update-metric/${name}`, { 
    method: "PUT", 
    body: JSON.stringify({ values: data })
  });
};

// 🔹 DELETE (Eliminar una métrica)
export const deleteData = async (name) => {
  return await fetchData(`delete-metric/${name}`, { method: "DELETE" });  // Corregir la construcción del endpoint
};
