import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cultura } from '../models/cultura';

@Injectable({
    providedIn: 'root'
})
export class CulturaService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/culturas';

    listar(): Observable<Cultura[]> {
        return this.http.get<Cultura[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<Cultura> {
        return this.http.get<Cultura>(`${this.API_URL}/${id}`);
    }

    // Omite o ID, pois será gerado pelo BD
    criar(cultura: Omit<Cultura, 'id'>): Observable<Cultura> {
        return this.http.post<Cultura>(this.API_URL, cultura);
    }

    atualizar(id: number, cultura: Partial<Cultura>): Observable<Cultura> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<Cultura>(`${this.API_URL}/${id}`, cultura);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}