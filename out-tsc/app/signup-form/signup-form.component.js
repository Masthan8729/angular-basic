import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidator } from '../common/validators/username.validator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function SignupFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " Username of password is invalid ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking for uniqueness...");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Username is required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Username should be mininum ", ctx_r5.username == null ? null : ctx_r5.username.errors == null ? null : ctx_r5.username.errors["minlength"].requiredLength, " characters ");
} }
function SignupFormComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username cannot contain spaces ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Username is taken try another ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, SignupFormComponent_div_9_div_1_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(2, SignupFormComponent_div_9_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵtemplate(3, SignupFormComponent_div_9_div_3_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(4, SignupFormComponent_div_9_div_4_Template, 2, 0, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors["cannotContainsSpace"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors["shouldBeUnique"]);
} }
function SignupFormComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " Password is required ");
    i0.ɵɵelementEnd();
} }
export class SignupFormComponent {
    constructor() {
        // form will be the value provided to the [formGroup]
        this.form = new FormGroup({
            // username and password will be formControlName properties of the input elements
            // we can also add multiple validations for a single field
            // Here UserNameValidator is a custom validator
            // As UserNameValidator.shouldBeUnique is an async validator we passed it to the form control as a third parameter
            // we can have nested Form grups as well
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    UserNameValidator.cannotContainsSpace,
                ], UserNameValidator.shouldBeUnique),
                password: new FormControl('', Validators.required),
            }),
            // this is for individual form control elements
            // username: new FormControl(
            //   '',
            //   [
            //     Validators.required,
            //     Validators.minLength(3),
            //     UserNameValidator.cannotContainsSpace,
            //   ],
            //   UserNameValidator.shouldBeUnique
            // ),
            // password: new FormControl('', Validators.required),
        });
    }
    get username() {
        // in order to access the form control which is in a form group then we need to use the whole path
        // for simple form control
        // return this.form.get('username');
        // for form control which is in a form group
        return this.form.get('account.username');
    }
    get password() {
        // in order to access the form control which is in a form group then we need to use the whole path
        // for simple form control
        // return this.form.get('password');
        // for form control which is in a form group
        return this.form.get('account.password ');
    }
    login() {
        // we can set the errors to the whole form as well using this syntx
        this.form.setErrors({
            invalidLogin: true,
        });
        // If we want append these errors of specific elements then we can do that as well
        // this.username?.setErrors({})
    }
    static { this.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupFormComponent, selectors: [["app-signup-form"]], decls: 17, vars: 5, consts: [[1, "form-element"], [3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], ["formGroupName", "account"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["type", "text", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
            i0.ɵɵtemplate(2, SignupFormComponent_div_2_Template, 2, 0, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "label", 5);
            i0.ɵɵtext(6, "UserName");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 6);
            i0.ɵɵtemplate(8, SignupFormComponent_div_8_Template, 2, 0, "div", 7);
            i0.ɵɵtemplate(9, SignupFormComponent_div_9_Template, 5, 4, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 4)(11, "label", 8);
            i0.ɵɵtext(12, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 9);
            i0.ɵɵtemplate(14, SignupFormComponent_div_14_Template, 2, 0, "div", 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "button", 10);
            i0.ɵɵtext(16, "Sign Up");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.form.errors);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.username == null ? null : ctx.username.pending);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.username == null ? null : ctx.username.touched) && (ctx.username == null ? null : ctx.username.invalid));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", (ctx.password == null ? null : ctx.password.touched) && (ctx.password == null ? null : ctx.password.invalid));
        } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName], styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  width: 700px;\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin: 10px 0 10px 0;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupFormComponent, [{
        type: Component,
        args: [{ selector: 'app-signup-form', template: "<div class=\"form-element\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n    <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\n      Username of password is invalid\n    </div>\n    <!-- If we are using nested form groups then we need to place all the form groups in a parent group -->\n    <div formGroupName=\"account\">\n      <div class=\"form-group\">\n        <label for=\"username\">UserName</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"username\"\n          formControlName=\"username\"\n        />\n        <!-- pending property will be true if any of the async validation is still in progress -->\n        <div *ngIf=\"username?.pending\">Checking for uniqueness...</div>\n        <div\n          *ngIf=\"username?.touched && username?.invalid\"\n          class=\"alert alert-danger\"\n        >\n          <div *ngIf=\"username?.errors?.['required']\">Username is required</div>\n          <div *ngIf=\"username?.errors?.['minlength']\">\n            Username should be mininum\n            {{username?.errors?.['minlength'].requiredLength}} characters\n          </div>\n          <div *ngIf=\"username?.errors?.['cannotContainsSpace']\">\n            Username cannot contain spaces\n          </div>\n          <div *ngIf=\"username?.errors?.['shouldBeUnique']\">\n            Username is taken try another\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"password\"\n          formControlName=\"password\"\n        />\n        <div\n          *ngIf=\"password?.touched && password?.invalid\"\n          class=\"alert alert-danger\"\n        >\n          Password is required\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n  </form>\n</div>\n", styles: [".form-element {\r\n  padding: 20px;\r\n  width: 700px;\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-group {\r\n  margin: 10px 0 10px 0;\r\n}\r\n"] }]
    }], null, null); })();
//# sourceMappingURL=signup-form.component.js.map