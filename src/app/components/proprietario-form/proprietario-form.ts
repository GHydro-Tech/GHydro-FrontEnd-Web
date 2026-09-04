import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';

import { ProprietarioService } from '../../service/proprietario.service';
import { Proprietario, CriarProprietarioRequest } from '../../models/proprietario.model';

@Component({
  selector: 'app-proprietario-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    InputNumberModule
  ],
  templateUrl: './proprietario-form.html',
  styleUrls: ['./proprietario-form.css']
})
export class ProprietarioFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private proprietarioService = inject(ProprietarioService);

  form!: FormGroup;
  salvando: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      propriedades: this.fb.array([])
    });

    this.adicionarPropriedade();
  }

  get propriedades(): FormArray {
    return this.form.get('propriedades') as FormArray;
  }

  criarGrupoPropriedade(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      area: [null, [Validators.required, Validators.min(0.01)]]
    });
  }

  adicionarPropriedade(): void {
    this.propriedades.push(this.criarGrupoPropriedade());
  }

  removerPropriedade(index: number): void {
    if (this.propriedades.length > 1) {
      this.propriedades.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    const payload: CriarProprietarioRequest = this.form.value;

    this.proprietarioService.criarProprietario(payload).subscribe({
      next: (resposta: Proprietario) => {
        alert(`Proprietário "${resposta.nome}" cadastrado com sucesso! ID: ${resposta.id}`);
        this.form.reset();
        this.propriedades.clear();
        this.adicionarPropriedade();
        this.salvando = false;
      },
      error: (erro: HttpErrorResponse) => {
        console.error('Erro ao cadastrar proprietário:', erro);
        alert('Ocorreu um erro ao salvar o cadastro.');
        this.salvando = false;
      }
    });
  }
}