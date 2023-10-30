

const initialStateAccount = {
    loan: 0,
    balance : 0 ,
    loanPurpose: "",
    isLoading: false
}

export default function  accountReducer( state = initialStateAccount,action){

    switch(action.type){
        case "account/deposit":
            return {...state,balance:state.balance + action.payload,isLoading:false}

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
            
            case "account/convertingCurrency":
                return {...state,isLoading:true}

        default:
          return state  
    }
}

function deposit(amount,currency){
    if(currency === 'USD') return {type:"account/deposit",payload:amount}


    return async function(dispatch,getState){
        dispatch({type:'account/convertingCurrency'})
        
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
        const data = await res.json()
        const converted = data.rates.USD

        dispatch({type:"account/deposit",payload:converted})
    }
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