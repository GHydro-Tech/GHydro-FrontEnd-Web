import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recomendacao } from '../models/recomendacao';

@Injectable({
    providedIn: 'root'
})
export class RecomendacaoService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/recomendacoes';

    listar(): Observable<Recomendacao[]> {
        return this.http.get<Recomendacao[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<Recomendacao> {
        return this.http.get<Recomendacao>(`${this.API_URL}/${id}`);
    }

    criar(recomendacao: Omit<Recomendacao, 'id'>): Observable<Recomendacao> {
        return this.http.post<Recomendacao>(this.API_URL, recomendacao);
    }

    atualizar(id: number, recomendacao: Partial<Recomendacao>): Observable<Recomendacao> {
        return this.http.put<Recomendacao>(`${this.API_URL}/${id}`, recomendacao);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}