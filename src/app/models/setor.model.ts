import { Plantio } from './plantio.model';
import { Propriedade } from './propriedade.model';
import { Sensor } from './sensor.model';
import { TipoSolo } from './tipo-solo.model';

// DispositivoIrrigacao será tipada quando a classe for enviada
export interface Setor {
  id?: number;
  nome?: string;
  poligonoGeografico?: string;
  propriedade?: Propriedade;
  tipoSolo?: TipoSolo;
  dispositivoIrrigacao?: any; // DispositivoIrrigacao
  plantios?: Plantio[];
  sensores?: Sensor[];
}