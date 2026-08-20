import { TipoDispositivo } from './enums/tipo-dispositivo.enum';
import { Setor } from './setor.model';

export interface DispositivoIrrigacao {
  id?: number;
  nome?: string;
  tipoDispositivo?: TipoDispositivo;
  eficienciaIrrigacao?: number;
  vazaoNominal?: number;
  potenciaMotor?: number;
  setor?: Setor;
}