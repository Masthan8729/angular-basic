import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["", 8, "heading"]], [["", 8, "body"]]];
const _c1 = [".heading", ".body"];
export class PanelComponent {
    static { this.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["app-panel"]], ngContentSelectors: _c1, decls: 5, vars: 0, consts: [[1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4, 1);
            i0.ɵɵelementEnd()();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'app-panel', template: "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <!-- Instead of hard coding the data in this template we can get it from the parent template using ng-content -->\n    <!-- here select = '.heading' is used to uniquely identify which element data we need to get -->\n    <ng-content select=\".heading\"></ng-content>\n  </div>\n  <div class=\"panel-body\">\n    <ng-content select=\".body\"></ng-content>\n  </div>\n</div>\n" }]
    }], null, null); })();
//# sourceMappingURL=panel.component.js.map