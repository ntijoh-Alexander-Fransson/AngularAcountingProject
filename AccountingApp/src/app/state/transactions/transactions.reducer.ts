import { createReducer, on } from "@ngrx/store";
import * as TransactionActions from "./transactions.actions"
import { ITransaction } from "src/app/ITransaction";

/****************************************************************************************
Here states specific to the page, unrelated to the server are stored and centraly managed
Right now I have no need for the handeling of page state outside of components so the 
functions here are purely experimental.
****************************************************************************************/

export const transactionState:ITransaction[] = [
      {
        id: "2",
        happening: "Slavery",
        amount: -60000,
        report: "RR",
        date: new Date(),
      },
      {
        id: "3",
        happening: "Ransom",
        amount: -10000,
        report: "BR",
        date: new Date(),
      },
      {
        id: "4",
        happening: "Raiding Booty",
        amount: 70000,
        report: "RR",
        date: new Date(),
      },
      {
        id: "1",
        happening: "Moms credit card",
        amount: 40000,
        report: "BR",
        date: new Date(),
      },
      {
        id: "5",
        happening: "Entertainment",
        amount: -4,
        report: "BR",
        date: new Date(),
      },
      {
        happening: "Winning the lottery",
        amount: 40000000,
        report: "BR",
        date: new Date(),
        id: "6"
      }
]

export const transactionReducer = createReducer(
    transactionState,
    on(TransactionActions.addTransaction, (state, trransaction) => [...state, trransaction]),

    on(TransactionActions.deleteTransaction, (state, trransaction) => {
      return state.map((transaction) => {
        if(transaction.id !== trransaction.id){
          return transaction
        }
        return {
          ...transaction,
        }
      })
    }),

    on(TransactionActions.updateTransaction, (state, trransaction) => {
      return state.map(transaction => {
        if(transaction.id !== trransaction.id){
          return transaction
        }
        return {
          ...transaction,
          ...trransaction
        }
      })
    }),

    on(TransactionActions.getTransactions, (state) => {
      return [...state, 
        {
          happening: "Costa concord",
          amount: 40000000,
          report: "BR",
          date: new Date(),
          id: "8"
        },
        {
          happening: "Costa concord",
          amount: 40000000,
          report: "BR",
          date: new Date(),
          id: "9"
        }
      ]
    })
)

