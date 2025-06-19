import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = 'https://localhost:44302/api/Product'; // Cambia según tu backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  update(id: string, product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  RemoveStock(id: string, quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/RemoveStock/${id}/${quantity}`, {});
  }

  uploadExcel(file: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/import`, file);
  }

}
