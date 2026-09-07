import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstacaoMeteorologica } from '../models/estacao-meteorologica';

@Injectable({
    providedIn: 'root'
})
export class EstacaoMeteorologicaService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/estacao-meteorologica';

    listar(): Observable<EstacaoMeteorologica[]> {
        return this.http.get<EstacaoMeteorologica[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<EstacaoMeteorologica> {
        return this.http.get<EstacaoMeteorologica>(`${this.API_URL}/${id}`);
    }

    // Omite o ID, pois será gerado pelo BD
    criar(estacaoMeteorologica: Omit<EstacaoMeteorologica, 'id'>): Observable<EstacaoMeteorologica> {
        return this.http.post<EstacaoMeteorologica>(this.API_URL, estacaoMeteorologica);
    }

    atualizar(id: number, estacaoMeteorologica: Partial<EstacaoMeteorologica>): Observable<EstacaoMeteorologica> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<EstacaoMeteorologica>(`${this.API_URL}/${id}`, estacaoMeteorologica);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}