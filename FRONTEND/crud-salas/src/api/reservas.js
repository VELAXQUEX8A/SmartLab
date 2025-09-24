import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/reservas/api";

export async function fetchLaboratorios() {
  return axios.get(`${BASE_URL}/laboratorios/`);
}
