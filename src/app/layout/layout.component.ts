import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../service/auth.service';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    AvatarModule,
    MenuModule
  ],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  authService = inject(AuthService);

  // Mapeamos o menu com base nos serviços CRUD que você já criou
  menuItems = [
    { label: 'Visão Geral', icon: 'pi pi-home', route: '/admin/dashboard' },
    { label: 'Proprietários', icon: 'pi pi-users', route: '/admin/proprietarios' },
    { label: 'Sensores', icon: 'pi pi-wifi', route: '/admin/sensores' },
    { label: 'Tipos de Solo', icon: 'pi pi-globe', route: '/admin/tipos-solo' },
    { label: 'Recomendações', icon: 'pi pi-chart-line', route: '/admin/recomendacoes' },
    { label: 'Propriedades', icon: 'pi pi-map', route: '/propriedades' }
  ];

  sair() {
    this.authService.logout();
  }
}
