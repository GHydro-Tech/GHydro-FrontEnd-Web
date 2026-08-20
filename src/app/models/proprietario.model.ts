import { Propriedade } from './propriedade.model';

// Usuario será tipada quando a classe for enviada
export interface Proprietario {
  id?: number;
  nome?: string;
  cpf?: string;
  usuario?: any; // Usuario
  propriedades?: Propriedade[];
}