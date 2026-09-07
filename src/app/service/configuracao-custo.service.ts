import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracaoCusto } from '../models/configuracao-custo';

@Injectable({
    providedIn: 'root'
})
export class ConfiguracaoCustoService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/configuracao-custo';

    listar(): Observable<ConfiguracaoCusto[]>{
        return this.http.get<ConfiguracaoCusto[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<ConfiguracaoCusto>{
        return this.http.get<ConfiguracaoCusto>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(configuracaoCusto: Omit<ConfiguracaoCusto, 'id'>): Observable<ConfiguracaoCusto> {
        return this.http.post<ConfiguracaoCusto>(this.API_URL, configuracaoCusto);
    }

    atualizar(id: number, configuracaoCusto: Partial<ConfiguracaoCusto>): Observable<ConfiguracaoCusto> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<ConfiguracaoCusto>(`${this.API_URL}/${id}`, configuracaoCusto);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}