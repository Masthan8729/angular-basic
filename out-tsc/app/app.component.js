import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./navbar/navbar.component";
export class AppComponent {
    constructor() {
        this.title = 'angular';
        this.test = true;
    }
    childComponentChanged(event) {
        console.log('child component changed', event);
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar")(1, "router-outlet");
        } }, dependencies: [i1.RouterOutlet, i2.NavbarComponent], styles: ["@import \"~bootstrap/dist/css/bootstrap.css\";"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<app-navbar></app-navbar>\n<!-- all the components will be rendered here -->\n<router-outlet></router-outlet>\n\n<!-- <h1>Angular</h1>\n<br />\n<h3>GithubFollowersComponent</h3>\n<app-github-followers></app-github-followers>\n<br />\n<h3>PostsComponent</h3>\n<app-posts></app-posts>\n<br />\n<h3>NewCourseComponent</h3>\n<app-new-course></app-new-course>\n<br /><br />\n<h3>SignupFormComponent</h3>\n<app-signup-form></app-signup-form>\n<br /><br />\n<h3>ContactFormComponent</h3>\n<app-contact-form></app-contact-form>\n<br /><br />\n<h3>CoursesComponent</h3>\n<app-courses></app-courses>\n<br /><br />\n<h3>FavouriteComponent</h3> -->\n<!-- [isFavourite]=\"test\" this is how we pass data between parent component to child component -->\n<!-- we can also capture the changes emitted from the child component as well (change)=\"childComponentChanged()-->\n<!-- <app-favourite\n  [isFavourite]=\"test\"\n  (change)=\"childComponentChanged($event)\"\n></app-favourite>\n<br /><br />\n<h3>PanelComponent</h3>\n<app-panel> -->\n<!-- Here we are passing the data to the child component which will be rendered in the ng-content tag -->\n<!-- It will place this div in the ng-content mentioned in the child component -->\n<!-- If we don't want to place this whole div and if we just want the content then we can use ng-container It will just render the text-->\n<!-- <ng-container class=\"heading\">Heading</ng-container>\n  <div class=\"body\">\n    <h3>Body</h3>\n    <p>It's the body element and write something here...</p>\n  </div>\n</app-panel> -->\n", styles: ["@import \"~bootstrap/dist/css/bootstrap.css\";\r\n"] }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map