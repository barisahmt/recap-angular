import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req : HttpRequest<any>, next : HttpHandlerFn) => {
  let token = localStorage.getItem("token")
  let newReq : HttpRequest<any>
  newReq = req.clone({
    headers : req.headers.set("Authorization","Bearer " + token)
  })
  return next(newReq);
};
