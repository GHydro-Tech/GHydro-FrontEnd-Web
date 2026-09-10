import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

// Tipagens locais para o Payload de Login
export interface LoginRequest {
  email: string;
  senha?: string; // ou 'password', dependendo do seu backend
}

export interface LoginResponse {
  token: string; // Ajuste conforme a chave que seu Spring Boot devolve no JSON
  // usuarioId?: number, role?: string, etc...
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  private readonly API_URL = 'http://localhost:8080/auth'; // Rota do backend
  private readonly TOKEN_KEY = 'ghydro_access_token';

  login(credenciais: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credenciais).pipe(
      tap(response => {
        if (response && response.token) {
          this.salvarToken(response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  salvarToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  obterToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  estaAutenticado(): boolean {
    // Aqui você pode adicionar lógica futura para verificar se o JWT expirou
    return !!this.obterToken();
  }

  // Novo método para resolver o Erro 2
  getPerfilAtual(): string | null {
    // Por enquanto vamos retornar um mock para o Guard deixar você passar.
    // Futuramente, podemos extrair isso decodificando o token JWT.
    return 'admin'; 
  }
}