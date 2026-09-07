export interface LeituraClimatica {
    id: number;
    estacaoMeteorologica_id: number;
    dataHora: Date | string; // DateTime
    temperaturaMinima: number;
    temperaturaMaxima: number;
    etoCalculado_mm: number;
}