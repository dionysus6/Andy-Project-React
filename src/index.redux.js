import axios from 'axios';
//const GROUP = 'GROUP';
const SIGNS = 'SIGNS';
const initState = {
	singed:false,
	id : 0
};
export function functionCommand(state=initState,action){
	//console.log(state, action);
	switch(action.type){
		case SIGNS:
			return {...state, signs: action.payload};
		default:
			return initState;
	}
}

export function getSignsData() {

	return (dispatch)=>{
		axios.get('/signs').then((res)=>{
			console.log(res.data);
			if(res.status===200){
				dispatch(SignsGet(res.data));
			}
		})
	}
	// body...
}
export function SignsGet(data) {
	// body...
	return {type:SIGNS,payload:data};
}
