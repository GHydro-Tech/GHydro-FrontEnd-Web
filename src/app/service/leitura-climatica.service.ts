import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeituraClimatica } from '../models/leitura-climatica';

@Injectable({
    providedIn: 'root'
})
export class LeituraClimaticaService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/leitura-climatica';

    listar(): Observable<LeituraClimatica[]> {
        return this.http.get<LeituraClimatica[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<LeituraClimatica> {
        return this.http.get<LeituraClimatica>(`${this.API_URL}/${id}`);
    }

    // Omite o ID, pois será gerado pelo BD
    criar(leituraClimatica: Omit<LeituraClimatica, 'id'>): Observable<LeituraClimatica> {
        return this.http.post<LeituraClimatica>(this.API_URL, leituraClimatica);
    }

    atualizar(id: number, leituraClimatica: Partial<LeituraClimatica>): Observable<LeituraClimatica> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<LeituraClimatica>(`${this.API_URL}/${id}`, leituraClimatica);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}