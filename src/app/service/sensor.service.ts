import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private http = inject(HttpClient);
  // Ajuste a URL caso o seu backend esteja usando /api/sensor
  private readonly API_URL = 'http://localhost:8080/sensor'; 

  listarTodos(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.API_URL);
  }

  salvar(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.API_URL, sensor);
  }

  atualizar(id: number, sensor: Sensor): Observable<Sensor> {
    return this.http.put<Sensor>(`${this.API_URL}/${id}`, sensor);
  }

  deletar(id: number): Observable<void> {
    // A barra no final é necessária porque o Controller no Java está mapeado como "/{id}/"
    return this.http.delete<void>(`${this.API_URL}/${id}/`);
  }
}