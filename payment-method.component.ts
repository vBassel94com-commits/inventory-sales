import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from '../../services/payment-method.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // إضافة RouterModule


@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  paymentMethods: any[] = [];
  newPaymentMethod: any = { name: '' };

  constructor(private paymentMethodService: PaymentMethodService) {}

  ngOnInit(): void {
    this.loadPaymentMethods();
  }

  loadPaymentMethods(): void {
    this.paymentMethodService.getAllPaymentMethods().subscribe(data => {
      this.paymentMethods = data;
    });
  }

  addPaymentMethod(): void {
    if (this.newPaymentMethod.name) {
      this.paymentMethodService.savePaymentMethod(this.newPaymentMethod).subscribe(() => {
        this.newPaymentMethod = { name: '' };
        this.loadPaymentMethods();
      });
    }
  }

  deletePaymentMethod(id: number): void {
    this.paymentMethodService.deletePaymentMethod(id).subscribe(() => {
      this.loadPaymentMethods();
    });
  }
}
