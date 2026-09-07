import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propriedade } from '../models/propriedade';

@Injectable({
    providedIn: 'root'
})
export class PropriedadeService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/propriedades';

    listar(): Observable<Propriedade[]>{
        return this.http.get<Propriedade[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<Propriedade>{
        return this.http.get<Propriedade>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(propriedade: Omit<Propriedade, 'id'>): Observable<Propriedade> {
        return this.http.post<Propriedade>(this.API_URL, propriedade);
    }

    atualizar(id: number, propriedade: Partial<Propriedade>): Observable<Propriedade> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<Propriedade>(`${this.API_URL}/${id}`, propriedade);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}