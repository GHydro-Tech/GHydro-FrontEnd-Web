import { UnidadeMedida } from './enums/unidade-medida.enum';
import { Sensor } from './sensor.model';

export interface LeituraSensor {
  id?: number;
  sensor?: Sensor;
  timestamp?: string | Date;
  valorBruto?: number;
  valorTratado?: number;
  unidadeMedida?: UnidadeMedida;
}