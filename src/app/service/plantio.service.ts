import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantio } from '../models/plantio';

@Injectable({
    providedIn: 'root'
})
export class PlantioService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/plantios';

    listar(): Observable<Plantio[]> {
        return this.http.get<Plantio[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<Plantio> {
        return this.http.get<Plantio>(`${this.API_URL}/${id}`);
    }

    // Omite o ID, pois será gerado pelo BD
    criar(plantio: Omit<Plantio, 'id'>): Observable<Plantio> {
        return this.http.post<Plantio>(this.API_URL, plantio);
    }

    atualizar(id: number, plantio: Partial<Plantio>): Observable<Plantio> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<Plantio>(`${this.API_URL}/${id}`, plantio);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}