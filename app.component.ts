import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // إضافة RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav>
      <a routerLink="/branches" routerLinkActive="active">Branches</a> |
      <a routerLink="/payment-methods" routerLinkActive="active">Payment Methods</a> |
      <a routerLink="/customers" routerLinkActive="active">Customers</a> |
      <a routerLink="/items" routerLinkActive="active">Items</a> |
      <a routerLink="/invoices" routerLinkActive="active">Invoices</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
