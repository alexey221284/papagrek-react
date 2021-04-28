import * as axios from "axios";

export default axios.create({
	//baseURL: "https://my-json-server.typicode.com/alexey221284/papagrek-react",
	baseURL: "http://127.0.0.1:5000",
	responseType: "json"
});