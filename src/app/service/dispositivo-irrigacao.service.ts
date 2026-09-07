import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DispositivoIrrigacao } from '../models/dispositivo-irrigacao';

@Injectable({
    providedIn: 'root'
})
export class DispositivoIrrigacaoService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/dispositivos-irrigacao';

    listar(): Observable<DispositivoIrrigacao[]>{
        return this.http.get<DispositivoIrrigacao[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<DispositivoIrrigacao>{
        return this.http.get<DispositivoIrrigacao>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(dispositivoIrrigacao: Omit<DispositivoIrrigacao, 'id'>): Observable<DispositivoIrrigacao> {
        return this.http.post<DispositivoIrrigacao>(this.API_URL, dispositivoIrrigacao);
    }

    atualizar(id: number, dispositivoIrrigacao: Partial<DispositivoIrrigacao>): Observable<DispositivoIrrigacao> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<DispositivoIrrigacao>(`${this.API_URL}/${id}`, dispositivoIrrigacao);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}