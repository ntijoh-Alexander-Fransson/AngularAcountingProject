import { createAction, props } from "@ngrx/store";
import { ITransaction } from "src/app/ITransaction";

export const balanceActions = {
    requestBalanceReport: createAction(
        '[BalanceReport] Request Report'
    ),
    loadBalanceReport: createAction(
        '[BalanceReport] Responds With Report',
        props<{transactions: ITransaction[]}>()
    ),
    balanceReportLoadError: createAction(
        '[BalanceReport] Responds With Error',
        props<{message: String}>()
    )
}