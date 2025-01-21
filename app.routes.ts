import { Routes } from '@angular/router';
import { BranchComponent } from './pages/branch/branch.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ItemComponent } from './pages/item/item.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'branches', pathMatch: 'full' },
  { path: 'branches', component: BranchComponent },
  { path: 'payment-methods', component: PaymentMethodComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'items', component: ItemComponent },
  { path: 'invoices', component: InvoiceComponent },
];
