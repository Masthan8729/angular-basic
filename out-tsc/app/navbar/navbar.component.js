import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return { page: 1, order: "newest" }; };
export class NavbarComponent {
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLinkActive", "active current", 1, "nav-item"], ["routerLink", "/followers", 1, "nav-link", 3, "queryParams"], ["routerLink", "/posts", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "button", 1);
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
            i0.ɵɵtext(7, "Followers ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "li", 5)(9, "a", 7);
            i0.ɵɵtext(10, "Posts");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [i1.RouterLink, i1.RouterLinkActive] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', template: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <!-- we can use href attribute of anchor tags to go the links but it will download the resources and initialize the\n    angular components which will cause some delay in the site -->\n    <!-- Instead of href attribute we can use routerLink  -->\n    <!-- Here routerLinkActive will dynamically apply the classes to the current active link -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <!-- we can also pass in optional query parameters queryParams -->\n        <a\n          class=\"nav-link\"\n          routerLink=\"/followers\"\n          [queryParams]=\"{ page: 1, order: 'newest' }\"\n          >Followers\n        </a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"/posts\">Posts</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n" }]
    }], null, null); })();
//# sourceMappingURL=navbar.component.js.map