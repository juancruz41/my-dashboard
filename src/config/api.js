const API_BASE_URL = process.env.REACT_APP_API_URL || "https://tu-backend.vercel.app/api"; // Cambia con tu URL real

const fetchData = async (endpoint, options = {}) => {
    try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
    } catch (error) {
    console.error("API Error:", error);
    return null;
    }
};

// 🔹 GET (Obtener datos)
export const getData = async (endpoint) => {
    return await fetchData(endpoint);
};

// 🔹 POST (Crear un nuevo recurso)
export const postData = async (endpoint, data) => {
    return await fetchData(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    });
};

// 🔹 PUT (Actualizar un recurso existente)
export const putData = async (endpoint, data) => {
    return await fetchData(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
    });
};

// 🔹 DELETE (Eliminar un recurso)
export const deleteData = async (endpoint) => {
    return await fetchData(endpoint, { method: "DELETE" });
};
