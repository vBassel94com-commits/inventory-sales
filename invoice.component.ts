import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // إضافة RouterModule


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(): void {
    // Example: Load invoices by a fixed date range (update logic as needed)
    const startDate = '2025-01-01';
    const endDate = '2025-01-31';
    this.invoiceService.getInvoicesByDateRange(startDate, endDate).subscribe(data => {
      this.invoices = data;
    });
  }
}
