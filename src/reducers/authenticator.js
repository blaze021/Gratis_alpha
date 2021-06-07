export const userState=(state={isLoading: true,isLoggedIn: false,userName: '', photoURL: ''},action)=>{
    switch(action.type){
        case 'LOGIN': {console.log("reached");return {...state,isLoading: false,isLoggedIn: true, userName: action.payload.userName, photoURL: action.payload.photoURL, email: action.payload.email}}
        case 'LOGOUT': return {...state,isLoading: false,isLoggedIn:false,userName: '',photoUrl: ''}
        case 'CHANGE_PROFILE': return {...state, photoURL: action.payload}
        case 'CHANGE': return {...state,isLoading: false}
        default: return {...state}
    }
}