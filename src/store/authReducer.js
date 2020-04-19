
const initState = {}

const authReducer = (state = initState, action) => {
    console.log(action)
    if(action.type === 'LOGIN'){
     return  (state = action.data)
     
    }
    return state;
  }

export default authReducer

