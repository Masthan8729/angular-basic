import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found.error';
import { BadInputError } from '../common/bad-input.error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PostService {
    constructor(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    // Everything looks fine with this service but these crud operations will be used for other components as well
    // instead of creating individual services for each component we can extract this template and reuse it with other components
    // so I have shifted this code to the data.service.ts
    // we can use map operator if we want modify the response
    getPosts() {
        return this.http.get(this.url).pipe(catchError(this.handleError));
    }
    createPost(post) {
        // if you just want to throw an error
        // return throwError(() => new AppError());
        // we can convert Observable to Promise using lastValueFrom
        const observable = this.http.post(this.url, JSON.stringify(post));
        // return lastValueFrom(observable);
        return observable.pipe(catchError(this.handleError));
    }
    updatePost(post) {
        return this.http
            .patch(this.url + '/' + post.id, JSON.stringify(post))
            .pipe(catchError(this.handleError));
    }
    deletePost(id) {
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
    static { this.ɵfac = function PostService_Factory(t) { return new (t || PostService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=post.service.js.map