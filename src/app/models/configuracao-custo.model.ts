import { Moeda } from './enums/moeda.enum';
import { Propriedade } from './propriedade.model';

export interface ConfiguracaoCusto {
  id?: number;
  propriedade?: Propriedade;
  custoM3Agua?: number;
  custoKWh?: number;
  moeda?: Moeda;
}