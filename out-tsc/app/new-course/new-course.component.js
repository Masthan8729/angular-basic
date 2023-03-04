import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function NewCourseComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function NewCourseComponent_li_6_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const topic_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeTopic(topic_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", topic_r2.value, " ");
} }
export class NewCourseComponent {
    // we can use FormBuilder to rewrite more cleaner code than the above
    constructor(fb) {
        this.form = new FormGroup({
            name: new FormControl(),
            contact: new FormGroup({
                email: new FormControl(),
                phone: new FormControl(),
            }),
            topics: new FormArray([]),
        });
        this.newForm = fb.group({
            // Instead of new FormControl() we can just keep it as an empty array
            // the parameters we pass into the FormControl('',Validators.required) will be added to the array
            name: [],
            contact: fb.group({
                email: [],
                phone: [],
            }),
            topics: fb.array([]),
        });
    }
    get topics() {
        return this.form.get('topics');
    }
    addTopic(topic) {
        this.form.get('topics').push(new FormControl(topic.value));
        topic.value = '';
    }
    removeTopic(topic) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }
    static { this.ɵfac = function NewCourseComponent_Factory(t) { return new (t || NewCourseComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewCourseComponent, selectors: [["app-new-course"]], decls: 7, vars: 2, consts: [[3, "formGroup"], ["for", "topic"], ["type", "text", "id", "topic", 1, "form-control", 3, "keyup.enter"], ["topic", ""], [1, "list-group"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function NewCourseComponent_Template(rf, ctx) { if (rf & 1) {
            const _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0)(1, "label", 1);
            i0.ɵɵtext(2, "Enter Courses :");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 2, 3);
            i0.ɵɵlistener("keyup.enter", function NewCourseComponent_Template_input_keyup_enter_3_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(4); return i0.ɵɵresetView(ctx.addTopic(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "ul", 4);
            i0.ɵɵtemplate(6, NewCourseComponent_li_6_Template, 2, 1, "li", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.topics.controls);
        } }, dependencies: [i2.NgForOf, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewCourseComponent, [{
        type: Component,
        args: [{ selector: 'app-new-course', template: "<form [formGroup]=\"form\">\n  <label for=\"topic\">Enter Courses :</label>\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    id=\"topic\"\n    #topic\n    (keyup.enter)=\"addTopic(topic)\"\n  />\n  <ul class=\"list-group\">\n    <li\n      *ngFor=\"let topic of topics.controls\"\n      class=\"list-group-item\"\n      (click)=\"removeTopic(topic)\"\n    >\n      {{ topic.value }}\n    </li>\n  </ul>\n</form>\n" }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=new-course.component.js.map