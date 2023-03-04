import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found.error';
import { BadInputError } from '../common/bad-input.error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DataService {
    constructor(link, http) {
        this.link = link;
        this.http = http;
        this.url = '';
        this.url = link;
    }
    // we can use map operator if we want modify the response
    getAll() {
        return this.http.get(this.url).pipe(catchError(this.handleError));
    }
    create(resource) {
        return this.http
            .post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    delete(id) {
        return this.http
            .delete(this.url + '/' + id)
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        if (error.status === 404) {
            return throwError(() => new NotFoundError(error));
        }
        else if (error.status === 404) {
            return throwError(() => new BadInputError(error));
        }
        return throwError(() => new AppError(error));
    }
    static { this.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(String), i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [String]
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data.service.js.map