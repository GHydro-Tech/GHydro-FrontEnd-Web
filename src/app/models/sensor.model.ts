import { StatusSensor } from './enums/status-sensor.enum';
import { TipoSensor } from './enums/tipo-sensor.enum';
import { LeituraSensor } from './leitura-sensor.model';
import { Setor } from './setor.model';

export interface Sensor {
  id?: number;
  tipos?: TipoSensor[];
  status?: StatusSensor;
  dataInstalacao?: string | Date;
  nivelBateria?: number;
  setor?: Setor;
  leituras?: LeituraSensor[];
}