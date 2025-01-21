import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private readonly apiUrl = 'http://localhost:8080/api/branches';

  constructor(private http: HttpClient) {}

  getAllBranches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // إضافة فرع جديد
  saveBranch(branch: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, branch);
  }

  // حذف فرع
  deleteBranch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
