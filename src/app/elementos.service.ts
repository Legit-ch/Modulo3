import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url.token';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ElementosDexieDB, Elemento } from './elementos.dexie';

@Injectable({ providedIn: 'root' })
export class ElementosService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    private db: ElementosDexieDB
  ) {}

  getElementos(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>(`${this.apiUrl}/elementos`);
  }

  addElemento(elemento: Elemento): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/elementos`, elemento).pipe(
      tap((res) => {
        if (res && res.success && res.elemento) {
          this.db.elementos.add(res.elemento);
        }
      })
    );
  }
}
