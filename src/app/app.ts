import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProprietarioFormComponent } from './components/proprietario-form/proprietario-form'; //

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    ProprietarioFormComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
