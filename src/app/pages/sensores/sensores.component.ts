import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SensorService } from '../../service/sensor.service';
import { Sensor } from '../../models/sensor.model';
import { StatusSensor } from '../../models/enums/status-sensor.enum';
import { TipoSensor } from '../../models/enums/tipo-sensor.enum';


// Componentes PrimeNG
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePickerModule } from 'primeng/datepicker'; // Substituiu o Calendar no PrimeNG 22
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sensores',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    TableModule, 
    ButtonModule, 
    DialogModule, 
    InputNumberModule, 
    SelectModule,         // O antigo Dropdown que já atualizamos
    MultiSelectModule,    // <-- Faltava esse para o p-multiSelect funcionar
    DatePickerModule, 
    ToastModule,
    DatePipe              // <-- Faltava esse para formatar a data
  ],
  providers: [MessageService],
  templateUrl: './sensores.component.html'
})
export class SensoresComponent implements OnInit {
  private sensorService = inject(SensorService);
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  sensores: Sensor[] = [];
  exibirDialog = false;
  sensorSelecionadoId: number | null = null;

  // Opções para os Dropdowns
  opcoesStatus = Object.values(StatusSensor).map(s => ({ label: s, value: s }));
  opcoesTipos = Object.values(TipoSensor).map(t => ({ label: t, value: t }));

  sensorForm = this.fb.nonNullable.group({
    tipos: [[], Validators.required],
    status: [StatusSensor.ATIVO, Validators.required],
    dataInstalacao: [new Date(), Validators.required],
    nivelBateria: [100, [Validators.min(0), Validators.max(100)]],
    setorId: [null as number | null, Validators.required]
  });

  ngOnInit() {
    this.carregarSensores();
  }

  carregarSensores() {
    this.sensorService.listarTodos().subscribe({
      next: (dados) => this.sensores = dados,
      error: () => this.mostrarMensagem('error', 'Erro', 'Não foi possível carregar os sensores.')
    });
  }

  abrirNovo() {
    this.sensorSelecionadoId = null;
    this.sensorForm.reset({ status: StatusSensor.ATIVO, dataInstalacao: new Date(), nivelBateria: 100 });
    this.exibirDialog = true;
  }

  editarSensor(sensor: Sensor) {
    this.sensorSelecionadoId = sensor.id || null;
    this.sensorForm.patchValue({
      tipos: sensor.tipos as any,
      status: sensor.status,
      dataInstalacao: new Date(sensor.dataInstalacao),
      nivelBateria: sensor.nivelBateria,
      setorId: sensor.setor.id
    });
    this.exibirDialog = true;
  }

  salvar() {
    if (this.sensorForm.invalid) return;

    const formValues = this.sensorForm.getRawValue();
    // Montando o payload conforme o formato exigido pelo backend
    const payload: Sensor = {
      tipos: formValues.tipos as any,
      status: formValues.status,
      dataInstalacao: formValues.dataInstalacao.toISOString(),
      nivelBateria: formValues.nivelBateria,
      setor: { id: formValues.setorId! } as any // Apenas o ID do setor é necessário para o backend
    };

    const requisicao = this.sensorSelecionadoId
      ? this.sensorService.atualizar(this.sensorSelecionadoId, payload)
      : this.sensorService.salvar(payload);

    requisicao.subscribe({
      next: () => {
        this.exibirDialog = false;
        this.carregarSensores();
        this.mostrarMensagem('success', 'Sucesso', 'Sensor salvo com sucesso!');
      },
      error: (err) => {
        this.mostrarMensagem('error', 'Erro', err.error?.message || 'Falha ao salvar o sensor.');
      }
    });
  }

  deletar(id: number) {
    if(confirm('Tem certeza que deseja excluir este sensor?')) {
      this.sensorService.deletar(id).subscribe({
        next: () => {
          this.carregarSensores();
          this.mostrarMensagem('success', 'Sucesso', 'Sensor excluído.');
        }
      });
    }
  }

  private mostrarMensagem(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }
}