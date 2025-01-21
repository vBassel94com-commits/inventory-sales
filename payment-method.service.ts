import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  private readonly apiUrl = 'http://localhost:8080/api/payment-methods';

  constructor(private http: HttpClient) {}

  // جلب جميع طرق الدفع
  getAllPaymentMethods(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // إضافة طريقة دفع جديدة
  savePaymentMethod(paymentMethod: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, paymentMethod);
  }

  // حذف طريقة دفع
  deletePaymentMethod(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
