import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Recupera o token de onde estiver armazenado 
  const token = localStorage.getItem('jwt_token');

  // 2. Se o token existir, injeta no header Authorization no padrão Bearer
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    
    // Envia a requisição clonada e modificada
    return next(authReq);
  }

  // 3. Se não houver token, segue com a requisição original
  return next(req);
};
