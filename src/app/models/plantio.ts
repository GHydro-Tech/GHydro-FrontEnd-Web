import { StatusPlantio } from './enums/status-plantio.enum'

export interface Plantio {
    id: number;
    cultura_id: number;
    setor_id: number;
    dataPlantio: Date | string; // DateTime
    statusPlantio: StatusPlantio;
}