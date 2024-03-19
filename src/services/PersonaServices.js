import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/persona";

export const listPersonas = () => axios.get(REST_API_BASE_URL);

export const createPersonas = (persona) =>
	axios.post(REST_API_BASE_URL, persona);

export const getPersonaById = (id) => axios.get(REST_API_BASE_URL + "/" + id);

export const updatePersona = (id, persona) =>
	axios.put(REST_API_BASE_URL + "/" + id, persona);

export const deletePersonaService = (id) =>
	axios.delete(REST_API_BASE_URL + "/" + id);
