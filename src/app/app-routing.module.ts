import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { TablesComponent } from './tables/tables.component';
import { Table2Component } from './table2/table2.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'table',
    component: TablesComponent
  },
  {
    path: 'table2',
    component: Table2Component
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
