import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeituraSensor } from '../models/leitura-sensor';

@Injectable({
    providedIn: 'root'
})
export class LeituraSensorService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/leitura-sensores';

    listar(): Observable<LeituraSensor[]> {
        return this.http.get<LeituraSensor[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<LeituraSensor> {
        return this.http.get<LeituraSensor>(`${this.API_URL}/${id}`);
    }

    // Omite o ID, pois será gerado pelo BD
    criar(leituraSensor: Omit<LeituraSensor, 'id'>): Observable<LeituraSensor> {
        return this.http.post<LeituraSensor>(this.API_URL, leituraSensor);
    }

    atualizar(id: number, leituraSensor: Partial<LeituraSensor>): Observable<LeituraSensor> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<LeituraSensor>(`${this.API_URL}/${id}`, leituraSensor);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}