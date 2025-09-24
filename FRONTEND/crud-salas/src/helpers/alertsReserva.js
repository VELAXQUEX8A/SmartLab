export const mostrarErrorReserva = (error) => {
  if (error.response) {
    const { data } = error.response;
    if (data?.error === "Sala no disponible") {
      alert("⚠️ La sala no pudo ser reservada, sala no disponible");
    } else if (data?.code === "token_not_valid") {
      alert("⚠️ Tu sesión ha expirado. Por favor vuelve a iniciar sesión.");
    } else {
      alert("❌ Error al reservar la sala");
    }
  } else {
    alert("❌ Error de conexión con el servidor");
  }
};
export const mostrarExitoReserva = () => {
  alert("✅ Reserva realizada con éxito");
};