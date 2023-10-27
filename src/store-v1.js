import {combineReducers, createStore} from "redux"


const initialStateAccount = {
    loan: 0,
    balance : 0 ,
    loanPurpose: ""
}

const initialStateCustomer = {
    fullname: "",
    nationalId: "",
    createdAt: ""
}

function customerReducer(action, state=initialStateCustomer){

    switch(action.type){

        case 'customer/createCustomer':
            return {...state, fullname: action.payload.fullname,nationalId:action.payload.nationalId,createdAt:action.payload.createdAt}

        case 'customer/updateName':
            return {...state, fullname: action.payload.newName,}
    
        default:
            return state
    }
}




function  accountReducer(action , state = initialStateAccount){

    switch(action.type){
        case "account/deposit":
            return {...state,balance:state.balance + action.payload}

            case "withdraw":
                return {...state,balance:state.balance - action.payload}

            case "account/requestLoan":
                //later
                if(state.loan>0)return state
                return {...state,loan:action.payload.amount,loanPurpose: action.payload.purpose}

        
            case "account/payLoan":
                    //later
                if(state.loan>0)return state
                return {...state,loan:0,loanPurpose:'',balance: state.balance - state.loan }

        default:
          return state  
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer)




function deposit(amount){
    return {type:"account/deposit",payload:amount}
} 
function withdraw(amount){
    return {type:"withdraw",payload:500}
}

function requestLoan(amount,purpose){
    return {type:"account/requestLoan",payload:{amount:amount,purpose:purpose}}
}
function payLoan()
{
    return {type:"account/payLoan"}
}

function createCustomer(fullname,nationalId){
    return {type:'customer/createCustomer',payload:{fullname,nationalId,createdAt : new Date().toISOString}}
}

function updateName(newName){
    return {type:'customer/updateName',payload:newName}
}