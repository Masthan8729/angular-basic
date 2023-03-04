import { Component, Input, Output, EventEmitter, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
// all the TypeScript files will be bundled together in main.js file
export class FavouriteComponent {
    constructor() {
        // we can use aliases as well here as the Input value mentioned in the
        // parent component might be different than what we use in the child component
        this.isSelected = false;
        // similarly we can user Aliases in Output values as well
        this.clicked = new EventEmitter();
    }
    onBtnClicked() {
        this.isSelected = !this.isSelected;
        // we can also pass data back to the parent as well
        this.clicked.emit(this.isSelected);
    }
    static { this.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouriteComponent, selectors: [["app-favourite"]], inputs: { isSelected: ["isFavourite", "isSelected"] }, outputs: { clicked: "change" }, decls: 5, vars: 1, consts: [[1, "favourite"], [1, "btn", "btn-primary", 3, "click"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1", 0);
            i0.ɵɵtext(1, "Favourite Component");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(2);
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function FavouriteComponent_Template_button_click_3_listener() { return ctx.onBtnClicked(); });
            i0.ɵɵtext(4, "Click Me");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\nis Favourite? ", ctx.isSelected, " ");
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouriteComponent, [{
        type: Component,
        args: [{ selector: 'app-favourite', encapsulation: ViewEncapsulation.Emulated, template: "<h1 class=\"favourite\">Favourite Component</h1>\nis Favourite? {{ isSelected }}\n\n<button class=\"btn btn-primary\" (click)=\"onBtnClicked()\">Click Me</button>\n" }]
    }], null, { isSelected: [{
            type: Input,
            args: ['isFavourite']
        }], clicked: [{
            type: Output,
            args: ['change']
        }] }); })();
//# sourceMappingURL=favourite.component.js.map