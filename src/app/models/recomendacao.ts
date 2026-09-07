import { StatusRecomendacao } from './enums/status-recomendacao.enum';

export interface Recomendacao {
    id: number;
    plantio_id: number;
    dataGeracao: Date | string; // DateTime
    duracaoEstimadaMin: number; //
    statusRecomendacao: StatusRecomendacao;
}