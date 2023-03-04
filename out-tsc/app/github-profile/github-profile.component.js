import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class GithubProfileComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        // we can also use snapshot get the query params
        let id = this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe((params) => {
            console.log(params.get('id'));
        });
    }
    submit() {
        // we can pass in the requried parameters in the array itself
        // we can also pass in optional parameters as second arguments
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest' },
        });
    }
    static { this.ɵfac = function GithubProfileComponent_Factory(t) { return new (t || GithubProfileComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubProfileComponent, selectors: [["app-github-profile"]], decls: 4, vars: 0, consts: [[1, "btn", "btn-primary", 3, "click"]], template: function GithubProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "github-profile works!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function GithubProfileComponent_Template_button_click_2_listener() { return ctx.submit(); });
            i0.ɵɵtext(3, "Submit");
            i0.ɵɵelementEnd();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-github-profile', template: "<p>github-profile works!</p>\n<button class=\"btn btn-primary\" (click) = \"submit()\">Submit</button>" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, null); })();
//# sourceMappingURL=github-profile.component.js.map