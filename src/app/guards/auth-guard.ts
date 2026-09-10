import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 1. Verifica se está logado
  if (!authService.estaAutenticado()) {
    router.navigate(['/login']);
    return false;
  }

  // 2. Verifica o controle de acesso por perfil (RBAC)
  const perfilEsperado = route.data?.['roles'] as Array<string>;
  const perfilAtual = authService.getPerfilAtual();

  if (perfilEsperado && perfilAtual && !perfilEsperado.includes(perfilAtual)) {
    // Se a rota exige um perfil específico e o usuário não o possui
    console.warn('Acesso negado: Perfil insuficiente.');
    router.navigate(['/acesso-negado']); // Ou redireciona para uma dashboard padrão
    return false;
  }

  return true;
};