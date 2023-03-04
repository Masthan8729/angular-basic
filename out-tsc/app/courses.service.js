import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CoursesService {
    constructor() { }
    getCourses() {
        return ['Angular', 'React', 'Vue'];
    }
    static { this.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CoursesService, factory: CoursesService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoursesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=courses.service.js.map