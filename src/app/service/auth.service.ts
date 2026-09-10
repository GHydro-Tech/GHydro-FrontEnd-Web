import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { Perfil } from '../models/enums/perfil.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:8080/api/auth/login';

  // Realiza o login e intercepta a resposta para salvar os dados antes de devolver ao componente
  login(credenciais: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.API_URL, credenciais).pipe(
      tap(response => {
        localStorage.setItem('jwt_token', response.token);
        localStorage.setItem('user_perfil', response.perfil);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_perfil');
  }

  getPerfilAtual(): Perfil | null {
    return localStorage.getItem('user_perfil') as Perfil | null;
  }

  isAutenticado(): boolean {
    return !!localStorage.getItem('jwt_token');
  }
}