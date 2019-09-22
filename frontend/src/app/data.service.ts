import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public auth(get: any): any {
    return this.http.get(`${environment.apiUrl}/accounts/authenticate/`);
  }

  public createCustomer(data: any): any {
    return this.http.post(`${environment.apiUrl}/account/`, data);
  }

  public resetPassword(data: any): any {
    return this.http.put(`${environment.apiUrl}/account/`, data);
  }

  public createContact(data: any): any {
    return this.http.post(`${environment.apiUrl}/contact/`, data);
  }

  public removeContact(data: any): any {
    return this.http.delete(`${environment.apiUrl}/contact/${data.id}/`, data);
  }

  public updateContact(data: any): any {
    return this.http.put(`${environment.apiUrl}/contact/${data.id}/`, data);
  }

  public getContacts(): any {
    return this.http.get(`${environment.apiUrl}/contact/`);
  }

  public getContact(id: number): any {
    return this.http.get(`${environment.apiUrl}/contact/${id}`);
  }
  
}
