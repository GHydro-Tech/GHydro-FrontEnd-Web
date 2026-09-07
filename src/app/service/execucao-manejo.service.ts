import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExecucaoManejo } from '../models/execucao-manejo';

@Injectable({
    providedIn: 'root'
})
export class ExecucaoManejoService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/execucao-manejo';

    listar(): Observable<ExecucaoManejo[]>{
        return this.http.get<ExecucaoManejo[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<ExecucaoManejo>{
        return this.http.get<ExecucaoManejo>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(execucaoManejo: Omit<ExecucaoManejo, 'id'>): Observable<ExecucaoManejo> {
        return this.http.post<ExecucaoManejo>(this.API_URL, execucaoManejo);
    }

    atualizar(id: number, execucaoManejo: Partial<ExecucaoManejo>): Observable<ExecucaoManejo> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<ExecucaoManejo>(`${this.API_URL}/${id}`, execucaoManejo);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}