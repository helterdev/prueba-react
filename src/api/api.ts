import axios from "./axios.config";

export const getBooks = async () => {
	return axios.get("/c41021ce-0f0d-4b77-9aef-d60de8cf0445");
};

export const getAuthor = async () => {
	return axios.get("/f365714d-8857-4a0a-ad11-2a53e1ffbf9a");
};
