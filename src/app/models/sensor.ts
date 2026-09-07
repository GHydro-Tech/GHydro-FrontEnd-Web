import { TipoSensor } from './enums/tipo-sensor.enum';
import { StatusSensor } from './enums/status-sensor.enum';

export interface Sensor {
    id: number;
    setor_id: number;
    modelo: string;
    tipo: TipoSensor;
    status: StatusSensor;
}

