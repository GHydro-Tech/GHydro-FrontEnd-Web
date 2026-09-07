import { UnidadeMedida } from './enums/unidade-medida.enum';

export interface LeituraSensor {
    id: number;
    sensor_id: number;
    timeStamp: Date | string; // DateTime
    valorTratado: number;
    unidade: UnidadeMedida;
}