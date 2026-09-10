import { Perfil } from './enums/perfil.enum';

export interface AuthResponse {
  token: string;
  perfil: Perfil;
  usuarioId: number;
}