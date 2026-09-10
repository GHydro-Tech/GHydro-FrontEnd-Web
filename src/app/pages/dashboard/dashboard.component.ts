import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="surface-card p-5 shadow-2 border-round">
        <div class="text-3xl font-medium text-900 mb-3">Visão Geral</div>
        <p class="text-600 line-height-3">Bem-vindo ao painel central do GHydro. Selecione uma opção no menu lateral para começar o gerenciamento.</p>
    </div>
  `
})
export class DashboardComponent {}