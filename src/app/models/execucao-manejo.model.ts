import { Origem } from './enums/origem.enum';
import { Plantio } from './plantio.model';
import { Recomendacao } from './recomendacao.model';

export interface ExecucaoManejo {
  id?: number;
  plantio?: Plantio;
  recomendacao?: Recomendacao;
  inicio?: string | Date;
  fim?: string | Date;
  volumeAguaAplicado?: number;
  energiaGasta?: number;
  origem?: Origem;
}