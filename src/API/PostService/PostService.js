import axios from "axios";

export default class PostService {
	static async getAll() {
			return await axios.get('ht tps://jsonplaceholder.typicode.com/posts');
	}
}