// EstacaoMetereologica será tipada quando a classe for enviada
export interface LeituraClimatica {
  id?: number;
  estacaoMetereologica?: any; // EstacaoMetereologica
  dataHora?: string | Date;
  temperaturaMaxima?: number;
  temperaturaMinima?: number;
  umidadeRelativaAr?: number;
  velocidadeVento?: number;
  radiacaoSolar?: number;
  precipitacao?: number;
  etoCalculado?: number;
}