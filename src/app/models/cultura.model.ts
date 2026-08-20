import { EstadoFenologico } from './estado-fenologico.model';

export interface Cultura {
  id?: number;
  nomeCientifico?: string;
  nomePopular?: string;
  variedade?: string;
  estadosFenoticos?: EstadoFenologico[];
}