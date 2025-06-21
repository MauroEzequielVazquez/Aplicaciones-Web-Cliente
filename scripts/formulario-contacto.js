const API_TOKEN = "path1DtAr4aENVq7v.41e34e680be1615623778d7f0b4e90c24784aba9952a8e087ac9ed3c82e0ca9d";
const BASE_ID = "app9gyrQZXACBIE6Y";
const TABLE_NAME = "tblmyUgxsS6rhHjM2";
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Traer valores desde el HTML (según tus IDs)
  const name = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const nameProduct = document.getElementById("nombre-producto").value;
  const message = document.getElementById("mensaje").value;
  const fechaSoloDia = new Date().toISOString().split("T")[0]; // Fecha en formato YYYY-MM-DD (sin hora), no se porque me tira error al hacer con fecha y hora

  // Preparar el objeto que Airtable espera
  const data = {
    fields: {
      name: name,
      email: email,
      "name-product": nameProduct,
      message: message,
      date: fechaSoloDia, // Usar la fecha en formato YYYY-MM-DD, no pude hacer andar con fecha y hora, lo dejo así x ahora

    },
  };
try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Respuesta Airtable:", result);

    if (res.ok) {
      alert("✅ ¡Consulta enviada correctamente!");
      form.reset();
    } else {
      alert(`❌ Error ${res.status}: ${result.error?.message || 'Error desconocido'}`);
      console.error("Detalles del error:", result);
    }

  } catch (error) {
    console.error("Error en la petición:", error);
    alert("⚠️ Error de red o API.");
  }

});
