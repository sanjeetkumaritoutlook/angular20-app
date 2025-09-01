import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormSchemaService {
  constructor(private http: HttpClient) {}

  loadSchema(): Observable<any> {
    return this.http.get<any[]>('/assets/form-schema.json');
  }
}
