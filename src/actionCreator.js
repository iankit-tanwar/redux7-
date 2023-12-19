import { ADD_FUND, WITHDRAW_FUND } from "./constant"


export const  addFundActionCreator=(amt)=>{

    return {
        type:ADD_FUND,
        amount:amt
    }
}
export const  WithdrawFundActionCreator=(amt)=>{

    return {
        type:WITHDRAW_FUND,
        amount:amt
    }
}