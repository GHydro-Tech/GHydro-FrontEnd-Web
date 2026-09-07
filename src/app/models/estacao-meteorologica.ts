import { TipoEstacao } from './enums/tipo-estacao.enum';

export interface EstacaoMeteorologica {
    id: number;
    propriedade_id: number;
    tipo: TipoEstacao;
    latitude: number;
    longitude: number;
    api_key: string;
}