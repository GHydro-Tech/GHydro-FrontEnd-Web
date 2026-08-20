import { TipoEstacao } from './enums/tipo-estacao.enum';
import { LeituraClimatica } from './leitura-climatica.model';
import { Propriedade } from './propriedade.model';

export interface EstacaoMetereologica {
  id?: number;
  nome?: string;
  tipo?: TipoEstacao;
  apiSource?: string;
  latitude?: string;
  longitude?: string;
  apiKey?: string;
  leiturasClimaticas?: LeituraClimatica[];
  propriedades?: Propriedade[];
}