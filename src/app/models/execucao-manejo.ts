import { Origem } from './enums/origem.enum';

export interface ExecucaoManejo {
    id: number;
    plantio_id: number;
    dispositivoIrrigacao_id: number;
    recomendacao_id: number;
    inicio: Date | string;
    volumeAguaAplicado: number;
    origem: Origem;
}