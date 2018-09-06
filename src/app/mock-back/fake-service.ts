
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { listIsues } from './mock-data';
import { fakeMakert } from './data/fake-market'
@Injectable()
export class FakeServiceInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(
            mergeMap(() => {
                if (request.url.endsWith('/issues.json') && request.method === 'GET') {
                    return of(new HttpResponse({ status: 200, body: listIsues }));
                }
                if (request.url.endsWith('/data-aggregator') && request.method === 'GET') {
                    return of(new HttpResponse({ status: 200, body: fakeMakert }));
                }
                return next.handle(request);
            })
        );
    }
}
export let FakeRest = {
    // sử dụng phụ trợ giả để thay thế cho dịch vụ Http để phát triển phụ trợ
    provide: HTTP_INTERCEPTORS,
    useClass: FakeServiceInterceptor,
    multi: true
};
