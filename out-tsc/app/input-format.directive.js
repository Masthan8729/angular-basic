import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        let value = this.el.nativeElement.value;
        console.log(value);
        if (this.format == 'uppercase')
            this.el.nativeElement.value = value.toLocaleUpperCase();
        else
            this.el.nativeElement.value = value.toLocaleLowerCase();
    }
    static { this.ɵfac = function InputFormatDirective_Factory(t) { return new (t || InputFormatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: InputFormatDirective, selectors: [["", "appInputFormat", ""]], hostBindings: function InputFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function InputFormatDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
        } }, inputs: { format: "format" } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFormatDirective, [{
        type: Directive,
        args: [{
                selector: '[appInputFormat]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { format: [{
            type: Input,
            args: ['format']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=input-format.directive.js.map