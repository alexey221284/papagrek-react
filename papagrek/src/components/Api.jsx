import * as axios from "axios";

export default axios.create({
	baseURL: "https://my-json-server.typicode.com/alexey221284/papagrek-react",
	responseType: "json"
});