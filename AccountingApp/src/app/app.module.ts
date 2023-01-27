import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssetsComponent } from './pages/accounts/assets/assets.component';
import { AccountsComponent } from './pages/accounts/accounts/accounts.component';
import { ReportsComponent } from './pages/reports/reports/reports.component';
import { TransctionComponent } from './pages/accounts/transction/transction.component';
import { ButtonComponent } from './pages/accounts/button/button.component';
import { AddTransactionComponent } from './pages/accounts/add-transaction/add-transaction.component';
import { DebtsComponent } from './pages/accounts/debts/debts.component';
import { StoreModule } from '@ngrx/store';
import { transactionReducer } from './state/transactions/transactions.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './state/transactions/transactions.effects';

const appRoutes: Routes = [
  {path: '', component: AccountsComponent},
  {path: 'reports', component: ReportsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AccountsComponent,
    ReportsComponent,
    TransctionComponent,
    ButtonComponent,
    AddTransactionComponent,
    DebtsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    StoreModule.forRoot({transactions: transactionReducer}),
    EffectsModule.forRoot([TransactionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
