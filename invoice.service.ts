import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private readonly apiUrl = 'http://localhost:8080/api/invoices';

  constructor(private http: HttpClient) {}

  // إنشاء فاتورة جديدة
  createInvoice(invoice: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, invoice);
  }

  // جلب الفواتير حسب نطاق التاريخ
  getInvoicesByDateRange(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/by-date?startDate=${startDate}&endDate=${endDate}`);
  }
}
