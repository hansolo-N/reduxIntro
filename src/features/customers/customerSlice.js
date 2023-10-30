import { createSlice } from "@reduxjs/toolkit"


const initialStateCustomer = {
    fullname: "",
    nationalId: "",
    createdAt: ""
}

const customerSlice = createSlice({
    name:"customer",
    initialState : initialStateCustomer,
    reducers: {
        createCustomer:{
        
            prepare(fullname,nationalId,createdAt){
                return {
                    payload: {fullname:fullname,nationalId:nationalId,createdAt: new Date().toISOString}
                }
            },
        
        reducer (state,action){
            state.fullname = action.payload.fullname;
            state.nationalId = action.payload.nationalId
            state.createdAt = action.payload.createdAt
        }},
        updateName(state,action){
            state.fullname = action.payload
        }
    }
})


// export default function customerReducer(state=initialStateCustomer,action){

//     switch(action.type){

//         case 'customer/createCustomer':
//             return {...state, fullname: action.payload.fullname,nationalId:action.payload.nationalId,createdAt:action.payload.createdAt}

//         case 'customer/updateName':
//             return {...state, fullname: action.payload.newName,}
    
//         default:
//             return state
//     }
// }



// function createCustomer(fullname,nationalId){
//     return {type:'customer/createCustomer',payload:{fullname,nationalId,createdAt : new Date().toISOString}}
// }

// function updateName(newName){
//     return {type:'customer/updateName',payload:newName}
// }

// export {createCustomer,updateName}

export default customerSlice.reducer

export const {createCustomer,updateName} = customerSlice.actions