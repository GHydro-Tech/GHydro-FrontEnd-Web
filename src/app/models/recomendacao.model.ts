import { StatusRecomendacao } from './enums/status-recomendacao.enum';
import { TipoAcao } from './enums/tipo-acao.enum';
import { ExecucaoManejo } from './execucao-manejo.model';
import { Plantio } from './plantio.model';

export interface Recomendacao {
  id?: number;
  plantio?: Plantio;
  dataGeracao?: string | Date;
  tipoAcao?: TipoAcao;
  quantidade?: number;
  duracao?: string;
  observacoes?: string;
  agenteResponsavel?: string;
  status?: StatusRecomendacao;
  dataConclusao?: string | Date;
  execucao?: ExecucaoManejo;
}