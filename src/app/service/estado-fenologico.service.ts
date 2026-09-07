import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadoFenologico } from '../models/estado-fenologico';

@Injectable({
    providedIn: 'root'
})
export class EstadoFenologicoService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/estados-fenologicos';

    listar(): Observable<EstadoFenologico[]> {
        return this.http.get<EstadoFenologico[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<EstadoFenologico> {
        return this.http.get<EstadoFenologico>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(estadoFenologico: Omit<EstadoFenologico, 'id'>): Observable<EstadoFenologico> {
        return this.http.post<EstadoFenologico>(this.API_URL, estadoFenologico);
    }

    atualizar(id: number, estadoFenologico: Partial<EstadoFenologico>): Observable<EstadoFenologico> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<EstadoFenologico>(`${this.API_URL}/${id}`, estadoFenologico);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}