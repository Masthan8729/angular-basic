import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactFormComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "First Name required");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First Name should be more than 2 characters ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First Name should be less than 10 characters ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, ContactFormComponent_div_9_div_1_Template, 2, 0, "div", 20);
    i0.ɵɵtemplate(2, ContactFormComponent_div_9_div_2_Template, 2, 0, "div", 20);
    i0.ɵɵtemplate(3, ContactFormComponent_div_9_div_3_Template, 2, 0, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors["maxlength"]);
} }
function ContactFormComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const method_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", method_r9.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", method_r9.name, " ");
} }
function ContactFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "label");
    i0.ɵɵelement(2, "input", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const location_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", location_r10.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", location_r10.name, " ");
} }
export class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            { id: 1, name: 'phone' },
            { id: 2, name: 'email' },
        ];
        this.locations = [
            { id: 1, name: 'Hyderabad' },
            { id: 2, name: 'Bangalore' },
        ];
    }
    submit(form) {
        console.log(form.value);
    }
    static { this.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 30, vars: 7, consts: [[1, "form-element"], [3, "ngSubmit"], ["form", "ngForm"], ["ngModelGroup", "contact"], [1, "form-group"], ["for", "firstName"], ["required", "", "minlength", "3", "maxlength", "10", "type", "text", "id", "firstName", "ngModel", "", "name", "firstName", 1, "form-control"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "comment"], ["id", "comment", "cols", "10", "rows", "5", "ngModel", "", "name", "comment", 1, "form-control"], ["comment", "ngModel"], ["for", "contactMethod"], ["multiple", "", "name", "contactMethod", "id", "contactMethod", "ngModel", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "radio", 4, "ngFor", "ngForOf"], [1, "checkbox"], ["type", "checkbox", "name", "isSubscribed", "ngModel", ""], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"], [1, "radio"], ["type", "radio", "ngModel", "", "name", "locations", 3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r11 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1, 2);
            i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r11); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.submit(_r0)); });
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "label", 5);
            i0.ɵɵtext(6, "First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 6, 7);
            i0.ɵɵtemplate(9, ContactFormComponent_div_9_Template, 4, 3, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 4)(11, "label", 9);
            i0.ɵɵtext(12, "Comment");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "textarea", 10, 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 4)(16, "label", 12);
            i0.ɵɵtext(17, "Contact Method");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "select", 13);
            i0.ɵɵtemplate(19, ContactFormComponent_option_19_Template, 2, 2, "option", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(20, ContactFormComponent_div_20_Template, 4, 2, "div", 15);
            i0.ɵɵelementStart(21, "div", 16)(22, "label");
            i0.ɵɵelement(23, "input", 17);
            i0.ɵɵtext(24, " Subscribe ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "p");
            i0.ɵɵtext(26);
            i0.ɵɵpipe(27, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 18);
            i0.ɵɵtext(29, "Submit");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(2);
            const _r1 = i0.ɵɵreference(8);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngForOf", ctx.contactMethods);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.locations);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(27, 5, _r0.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !_r0.valid);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i1.JsonPipe], styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  width: 700px;\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin: 10px 0 10px 0;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{ selector: 'app-contact-form', template: "<div class=\"form-element\">\n  <!-- we can use #form to check the validity of the whole form -->\n  <form #form=\"ngForm\" (ngSubmit)=\"submit(form)\">\n    <!-- we can group form groups usig ngModelGroup -->\n    <!-- Here contact will be an object which contains all the input fields -->\n    <!-- In an angular form we will have one or more form-groups and under each form-group we will have one or more\n    form-control elements attached to input elements -->\n    <div ngModelGroup=\"contact\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <!-- Here the name=\"firstName\" will act as a property which will hold the actual value -->\n        <input\n          required\n          minlength=\"3\"\n          maxlength=\"10\"\n          type=\"text\"\n          id=\"firstName\"\n          class=\"form-control\"\n          ngModel\n          name=\"firstName\"\n          #firstName=\"ngModel\"\n        />\n        <!-- we can display multiple errors based on the error type -->\n        <div\n          class=\"alert alert-danger\"\n          *ngIf=\"firstName.touched && !firstName.valid\"\n        >\n          <div *ngIf=\"firstName.errors?.['required']\">First Name required</div>\n          <div *ngIf=\"firstName.errors?.['minlength']\">\n            First Name should be more than 2 characters\n          </div>\n          <div *ngIf=\"firstName.errors?.['maxlength']\">\n            First Name should be less than 10 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"comment\">Comment</label>\n        <textarea\n          id=\"comment\"\n          cols=\"10\"\n          rows=\"5\"\n          class=\"form-control\"\n          ngModel\n          name=\"comment\"\n          #comment=\"ngModel\"\n        ></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"contactMethod\">Contact Method</label>\n        <select\n          multiple\n          name=\"contactMethod\"\n          id=\"contactMethod\"\n          ngModel\n          class=\"form-control\"\n        >\n          <option *ngFor=\"let method of contactMethods\" [value]=\"method.id\">\n            {{ method.name }}\n          </option>\n        </select>\n      </div>\n      <div *ngFor=\"let location of locations\" class=\"radio\">\n        <label>\n          <input type=\"radio\" ngModel name=\"locations\" [value]=\"location.id\" />\n          {{ location.name }}\n        </label>\n      </div>\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" name=\"isSubscribed\" ngModel /> Subscribe\n        </label>\n      </div>\n    </div>\n    <p>{{ form.value | json }}</p>\n    <button class=\"btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\n  </form>\n</div>\n", styles: [".form-element {\r\n  padding: 20px;\r\n  width: 700px;\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-group {\r\n  margin: 10px 0 10px 0;\r\n}\r\n"] }]
    }], null, null); })();
//# sourceMappingURL=contact-form.component.js.map