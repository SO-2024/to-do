import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem("token");
        if (token) {
            // if token is available
            const cloned = req.clone({
                headers: req.headers.set("authorization", token)
            });
            return next.handle(cloned);
        } else {
            console.log("here")
            // token is not available
            return next.handle(req);
        }
    }
}