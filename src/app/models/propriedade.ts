export interface Propriedade {
    id: number;
    proprietario_id : number;
    nome: string;
    localizacao: Record<string, any>; // JSON mapeado como objeto genérico
}