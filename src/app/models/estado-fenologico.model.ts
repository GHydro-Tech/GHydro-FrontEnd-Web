import { Cultura } from './cultura.model';

export interface EstadoFenologico {
  id?: number;
  cultura?: Cultura;
  ordemSequencia?: number;
  nomeFase?: string;
  descricaoFase?: string;
  duracaoDias?: number;
  kCFase?: number;
  profundidadeRaiz_cm?: number;
  sensibilidadeKY?: number;
}