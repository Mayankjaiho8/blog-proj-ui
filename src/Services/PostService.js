import axios from 'axios';

class PostService {
	
	server_url = "http://localhost:8080";

	submitPost(blogpost){
		const url = this.server_url+"/addpost";

		let promise = axios.post(url,blogpost); 
		promise.then((resp) => {
			return resp.data;
		},(rej) =>  {
			console.log(rej);
		})
		.catch((ex) => {
			console.log(ex)
		})
	}
}

export default PostService;