import { Proprietario } from './proprietario.model';
import { Setor } from './setor.model';

// ConfiguracaoCusto e EstacaoMetereologica serão tipadas quando as classes forem enviadas
export interface Propriedade {
  id?: number;
  nome?: string;
  localizacao?: string;
  configuracaoCusto?: any; // ConfiguracaoCusto
  proprietario?: Proprietario;
  setores?: Setor[];
  estacoes?: any[]; // EstacaoMetereologica[]
}