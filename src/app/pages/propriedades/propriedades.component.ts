import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TagModule, TooltipModule],
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {

  // Lista fictícia de propriedades para preencher a tabela
  propriedades = [
    { id: 1, nome: 'Fazenda Santa Cruz', localizacao: 'Goiânia, GO', hectares: 150, status: 'Ideal' },
    { id: 2, nome: 'Sítio Pôr do Sol', localizacao: 'Rio Verde, GO', hectares: 80, status: 'Seco' },
    { id: 3, nome: 'Fazenda Esperança', localizacao: 'Jataí, GO', hectares: 320, status: 'Ideal' }
  ];
}
