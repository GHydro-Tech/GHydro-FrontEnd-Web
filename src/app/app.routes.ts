import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component.js'; // ajuste a extensão se necessário
import { LayoutComponent } from './layout/layout.component'; // ou './pages/layout/layout.component' se você moveu
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SensoresComponent } from './pages/sensores/sensores.component'; // <-- NOVA IMPORTAÇÃO
import { PropriedadesComponent } from './pages/propriedades/propriedades.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: 'sensores', component: SensoresComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'propriedades', component: PropriedadesComponent }, // Nova rota aqui!
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
