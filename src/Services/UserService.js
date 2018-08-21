import { userAccountDetailsArr } from './../static/mockAccountCredentials.js';

export class UserService{
	
	constructor(){
		this.userAccDetailArr = userAccountDetailsArr;
	}
	checkUserCredentials(username, pwd){

		let len = this.userAccDetailArr.length;

		for(let i=0; i< len; i++){
			if(this.userAccDetailArr && this.userAccDetailArr[i].username === username && 
				this.userAccDetailArr[i].password === pwd){
				return true;
			}
		}
		return false;
	}
}