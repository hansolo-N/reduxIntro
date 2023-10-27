const initialStateCustomer = {
    fullname: "",
    nationalId: "",
    createdAt: ""
}


export default function customerReducer(state=initialStateCustomer,action){

    switch(action.type){

        case 'customer/createCustomer':
            return {...state, fullname: action.payload.fullname,nationalId:action.payload.nationalId,createdAt:action.payload.createdAt}

        case 'customer/updateName':
            return {...state, fullname: action.payload.newName,}
    
        default:
            return state
    }
}



function createCustomer(fullname,nationalId){
    return {type:'customer/createCustomer',payload:{fullname,nationalId,createdAt : new Date().toISOString}}
}

function updateName(newName){
    return {type:'customer/updateName',payload:newName}
}

export {createCustomer,updateName}