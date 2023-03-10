import { createReducer, on } from "@ngrx/store";
import { ITransaction } from "src/app/ITransaction";
import { IResultReport } from "../app.state";
import { resultActions } from "./resultreport.actions";

export const RESULT_REPORT_FEATURE_KEY = 'resultReport'

export const initialResultreport: IResultReport = {
    positveBalance: [],
    negativeBalance: []
}

export const resultReducer = createReducer(

    initialResultreport,

    on( resultActions.loadResultReport,
        (state, {transactions}) => ({
            ...state,
            positveBalance: transactions.filter((transaction: ITransaction) => transaction.amount > 0),
            negativeBalance: transactions.filter((transaction: ITransaction) => transaction.amount < 0)
        })
    ), 

    on( resultActions.getNewTransactionToStore,
        (state, {transaction}) => {
            if(transaction.amount > 0){
                return {...state, positveBalance: [...state.positveBalance, transaction]}
            }else{
                return {...state, negativeBalance: [...state.negativeBalance, transaction]}
            }
        }
    ),

    on( resultActions.updateResultStore,
        (state, {transaction}) => {
            if(transaction.amount > 0){
                return {
                    ...state, 
                    positveBalance: [...state.positveBalance.filter(event => event.id !== transaction.id), transaction],
                    negativeBalance: state.negativeBalance.filter(event => event.id !== transaction.id)
                }
            }else{
                return {
                    ...state, 
                    negativeBalance: [...state.negativeBalance.filter(event => event.id !== transaction.id), transaction],
                    positveBalance: state.positveBalance.filter(event => event.id !== transaction.id)
                }
            }
        }
    ),

        on( resultActions.removeTransactionFromStore, 
            (state, {id}) => ({
                ...state,
                positveBalance: state.positveBalance.filter(event => event.id !== id),
                negativeBalance: state.negativeBalance.filter(event => event.id !== id)
            }))
)