import { TipoSensor } from './enums/tipo-sensor.enum';
import { StatusSensor } from './enums/status-sensor.enum';
import { Setor } from './setor';

export interface Sensor {
  id?: number;
  tipos: TipoSensor[];
  status: StatusSensor;
  dataInstalacao: string; // O Spring Boot devolve LocalDateTime como ISO String
  nivelBateria?: number;
  setor: Setor;
}

