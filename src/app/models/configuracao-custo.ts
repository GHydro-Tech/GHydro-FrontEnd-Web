import { Moeda } from './enums/moeda.enum';

export interface ConfiguracaoCusto {
    id: number;
    propriedade_id: number;
    custo_kWh: number;
    custo_m3_agua: number;
    moeda: Moeda;

}