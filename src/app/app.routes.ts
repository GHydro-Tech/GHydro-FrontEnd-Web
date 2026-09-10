import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Rotas de teste simuladas para validar o redirecionamento do Guard:
  { path: 'admin/dashboard', loadComponent: () => import('./pages/login/login').then(c => c.LoginComponent) },
  { path: 'funcionario/dashboard', loadComponent: () => import('./pages/login/login').then(c => c.LoginComponent) }
];