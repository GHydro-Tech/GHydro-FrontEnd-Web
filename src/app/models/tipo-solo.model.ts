import { Setor } from './setor.model';

export interface TipoSolo {
  id?: number;
  descricao?: string;
  capacidadeCampo?: number;
  pontoMurcha?: number;
  densidadeAparente?: number;
  taxaInfiltracaoBasica?: number;
  setores?: Setor[];
}