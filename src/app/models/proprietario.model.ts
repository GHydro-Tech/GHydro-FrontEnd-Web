import { Propriedade } from './propriedade.model';

export interface Proprietario {
  id: number;
  nome: string;
  cpf: string;
  propriedades: Propriedade[];
}

export type CriarProprietarioRequest = Omit<Proprietario, 'id'>;