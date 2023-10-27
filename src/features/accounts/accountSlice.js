const initialStateAccount = {
    loan: 0,
    balance : 0 ,
    loanPurpose: ""
}



export default function  accountReducer( state = initialStateAccount,action){

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

function deposit(amount){
    return {type:"account/deposit",payload:amount}
} 
function withdraw(amount){
    return {type:"withdraw",payload:amount}
}

function requestLoan(amount,purpose){
    return {type:"account/requestLoan",payload:{amount:amount,purpose:purpose}}
}
function payLoan()
{
    return {type:"account/payLoan"}
}

export {deposit,withdraw,requestLoan,payLoan}