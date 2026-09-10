import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // Injeta o Router para permitir redirecionamentos de tela
  const router = inject(Router);

  // next(req) continua a requisição. O pipe "observa" a resposta.
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      
      switch (error.status) {
        case 401:
          // Não Autorizado (Token ausente ou expirado)
          // Limpa o token inválido e redireciona para o login
          localStorage.removeItem('jwt_token');
          router.navigate(['/login']);
          break;
          
        case 403:
          // Proibido (Usuário logado, mas sem permissão de acesso)
          console.warn('Acesso negado: você não tem permissão para esta ação.');
          // Futuramente, pode disparar um serviço de notificação visual (Toast/Snackbar)
          break;
          
        case 404:
          console.warn('Recurso não encontrado.');
          break;

        case 500:
          // Erro interno no servidor Java Spring
          console.error('Erro no servidor. Tente novamente mais tarde.');
          break;
          
        default:
          console.error('Ocorreu um erro desconhecido:', error.message);
      }

      // Repassa o erro adiante para que o componente que fez a requisição também possa reagir, se necessário
      return throwError(() => error);
    })
  );
};