import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  // جلب جميع العملاء
  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // إضافة عميل جديد
  saveCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer);
  }

  // حذف عميل
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
