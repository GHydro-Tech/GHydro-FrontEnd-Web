import { StatusPlantio } from './enums/status-plantio.enum';
import { ExecucaoManejo } from './execucao-manejo.model';
import { Setor } from './setor.model';

// Cultura será tipada quando a classe for enviada
export interface Plantio {
  id?: number;
  cultura?: any; // Cultura
  dataPlantio?: string | Date;
  dataColheitaEstimada?: string | Date;
  statusPlantio?: StatusPlantio;
  manejos?: ExecucaoManejo[];
  setor?: Setor;
}