import axios from "axios";

const instance = axios.create({
	baseURL: "https://mocki.io/v1/",
});

export default instance;
