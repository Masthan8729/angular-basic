import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GithubFollowersService {
    constructor(http) {
        this.http = http;
        this.url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    getFollowers() {
        return this.http.get(this.url);
    }
    static { this.ɵfac = function GithubFollowersService_Factory(t) { return new (t || GithubFollowersService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GithubFollowersService, factory: GithubFollowersService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=github-followers.service.js.map