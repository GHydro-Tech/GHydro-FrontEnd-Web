import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoSolo } from '../models/tipo-solo';

@Injectable({
    providedIn: 'root'
})
export class TipoSoloService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/tipos-solo';

    listar(): Observable<TipoSolo[]> {
        return this.http.get<TipoSolo[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<TipoSolo> {
        return this.http.get<TipoSolo>(`${this.API_URL}/${id}`);
    }

    // Omite o ID, pois será gerado pelo BD
    criar(tipoSolo: Omit<TipoSolo, 'id'>): Observable<TipoSolo> {
        return this.http.post<TipoSolo>(this.API_URL, tipoSolo);
    }

    atualizar(id: number, tipoSolo: Partial<TipoSolo>): Observable<TipoSolo> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<TipoSolo>(`${this.API_URL}/${id}`, tipoSolo);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}