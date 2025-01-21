import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly apiUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) {}

  // جلب جميع العناصر
  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // إضافة عنصر جديد
  saveItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  // حذف عنصر
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
