import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietario } from '../models/proprietario';

@Injectable({
    providedIn: 'root'
})
export class ProprietarioService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/proprietarios';

    listar(): Observable<Proprietario[]>{
        return this.http.get<Proprietario[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<Proprietario>{
        return this.http.get<Proprietario>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(proprietario: Omit<Proprietario, 'id'>): Observable<Proprietario> {
        return this.http.post<Proprietario>(this.API_URL, proprietario);
    }

    atualizar(id: number, proprietario: Partial<Proprietario>): Observable<Proprietario> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<Proprietario>(`${this.API_URL}/${id}`, proprietario);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}