import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietario, CriarProprietarioRequest } from '../models/proprietario.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {
  private readonly http = inject(HttpClient);
  private readonly url = 'http://localhost:8080/proprietario';

  criarProprietario (proprietario: CriarProprietarioRequest): Observable<Proprietario> {
    return this.http.post<Proprietario>(this.url, proprietario);
  }

  buscarPorId(id: number): Observable<Proprietario> {
    return this.http.get<Proprietario>(`${this.url}/${id}`);
  }
}