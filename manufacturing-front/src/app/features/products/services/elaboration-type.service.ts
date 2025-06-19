import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ElaborationType {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElaborationTypeService {
  private apiUrl = 'https://localhost:44302/api/ElaborationType';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ElaborationType[]> {
    return this.http.get<ElaborationType[]>(this.apiUrl);
  }
}
