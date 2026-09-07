export interface Setor {
    id: number;
    propriedade_id: number;
    tipoSolo_id: number;
    nome: string;
    poligonoGeografico: Record<string, any>; // JSON mapeado como objeto genérico
}