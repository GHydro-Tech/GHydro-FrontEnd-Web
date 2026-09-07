import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor';

@Injectable({
    providedIn: 'root'
})
export class SensorService {

    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/sensores';

    listar(): Observable<Sensor[]>{
        return this.http.get<Sensor[]>(this.API_URL);
    }

    buscarPorId(id: number): Observable<Sensor>{
        return this.http.get<Sensor>(`${this.API_URL}/${id}`);
    }
    
    // Omite o ID, pois será gerado pelo BD)
    criar(sensor: Omit<Sensor, 'id'>): Observable<Sensor> {
        return this.http.post<Sensor>(this.API_URL, sensor);
    }

    atualizar(id: number, sensor: Partial<Sensor>): Observable<Sensor> {
        // Partial pois em um PUT/PATCH podemos não querer enviar o objeto completo
        return this.http.put<Sensor>(`${this.API_URL}/${id}`, sensor);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}