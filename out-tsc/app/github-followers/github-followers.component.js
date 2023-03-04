import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../github-followers.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
const _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function GithubFollowersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementStart(2, "div", 4)(3, "h5", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Github link");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const follower_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", follower_r1.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(follower_r1.login);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(3, _c0, follower_r1.id, follower_r1.login));
} }
export class GithubFollowersComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        // instead of multiple Observables and subscribing to them individually we can combine them using combineLatest and subscribe
        // to the combined observable
        // here we have nested subscribe actions we can transform this using map/switchMap
        combineLatest([this.route.paramMap, this.route.queryParamMap])
            .pipe(switchMap((combined) => {
            // here combined[0] will contain the fist observable response i.e., this.route.paramMap
            let id = combined[0].get('id');
            // It will have response from the second observable i.e., this.rout.queryParamMap
            let page = combined[1].get('page');
            return this.service.getFollowers();
        }))
            .subscribe((followers) => (this.followers = followers));
        // As we have the combined Observable we don't need the below code
        // we can also get the optional query parameters from the url
        // for main query parameter we use
        // this.route.paramMap.subscribe((params) => {});
        // for optional query parameter we use
        // this.route.queryParamMap.subscribe((optionalParams) => {});
        // this.service.getFollowers().subscribe((followers) => {
        //   this.followers = followers;
        // });
    }
    static { this.ɵfac = function GithubFollowersComponent_Factory(t) { return new (t || GithubFollowersComponent)(i0.ɵɵdirectiveInject(i1.GithubFollowersService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubFollowersComponent, selectors: [["app-github-followers"]], decls: 2, vars: 1, consts: [[1, "parent"], ["class", "card child", "style", "width: 18rem", 4, "ngFor", "ngForOf"], [1, "card", "child", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function GithubFollowersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, GithubFollowersComponent_div_1_Template, 7, 6, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.followers);
        } }, dependencies: [i3.NgForOf, i2.RouterLink], styles: [".parent[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.child[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  margin-bottom: 20px;\r\n  \r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersComponent, [{
        type: Component,
        args: [{ selector: 'app-github-followers', template: "<div class=\"parent\">\n  <div\n    class=\"card child\"\n    *ngFor=\"let follower of followers\"\n    style=\"width: 18rem\"\n  >\n    <img src=\"{{ follower.avatar_url }}\" class=\"card-img-top\" alt=\"...\" />\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ follower.login }}</h5>\n      <!-- <p class=\"card-text\">\n      Some quick example text to build on the card title and make up the bulk of\n      the card's content.\n    </p> -->\n      <!-- For simple router we can just use the routerLink directive but if we want pass it query params then we need to\n    use property binding -->\n      <a\n        [routerLink]=\"['/followers', follower.id, follower.login]\"\n        class=\"btn btn-primary\"\n        >Github link</a\n      >\n    </div>\n  </div>\n</div>\n", styles: [".parent {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.child {\r\n  /* width: calc(33.33% - 10px); */\r\n  /* height: 200px; */\r\n  margin-bottom: 20px;\r\n  /* background-color: #ddd; */\r\n}\r\n"] }]
    }], function () { return [{ type: i1.GithubFollowersService }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=github-followers.component.js.map