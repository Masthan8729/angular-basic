import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../courses.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../input-format.directive";
import * as i5 from "../summary.pipe";
function CoursesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function CoursesComponent_ng_template_5_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r12, " ");
} }
function CoursesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " List of Courses: ");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, CoursesComponent_ng_template_5_li_3_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.courses);
} }
function CoursesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " No Courses yet ");
} }
function CoursesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Map Selected");
    i0.ɵɵelementEnd();
} }
function CoursesComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "List Selected");
    i0.ɵɵelementEnd();
} }
function CoursesComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Selected somthing else");
    i0.ɵɵelementEnd();
} }
function CoursesComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 25);
    i0.ɵɵlistener("click", function CoursesComponent_li_27_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const studentGrade_r13 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onRemove(studentGrade_r13)); });
    i0.ɵɵtext(3, " Remove ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const studentGrade_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate4(" ", i_r14, " - ", studentGrade_r13.id, " ", studentGrade_r13.name, " ", studentGrade_r13.grade, " ");
} }
function CoursesComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const newCourse_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", newCourse_r17.id, " ", newCourse_r17.name, " ");
} }
const _c0 = function () { return { "glyphicon-full": true, "glyphicon-empty": false }; };
const _c1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
export class CoursesComponent {
    constructor(service) {
        this.service = service;
        this.title = 'List of Courses';
        this.viewMode = 'map';
        this.courses = this.service.getCourses();
        this.colSpan = 10;
        this.isActive = false;
        this.name = 'testing';
        this.studentGrades = [
            { id: 1, name: 'student1', grade: 'A' },
            { id: 2, name: 'student2', grade: 'B' },
            { id: 3, name: 'student3', grade: 'B' },
            { id: 4, name: 'student4', grade: 'C' },
        ];
        this.canSave = true;
        this.longText = 'dkjlsjkjlfjhsj sddhfsk sfdhkslkjdfh jdsjhlksjhkdfj hdkshfnskkdsljfdhkhkldsj';
        this.imageUrl = 'https://images.unsplash.com/photo-1673293246730-0b6889707291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=50';
        this.course = {
            title: 'Angular',
            ratings: 4.875,
            students: 748944,
            price: 98.89,
            releaseDate: new Date(),
        };
    }
    loadCourses() {
        this.newCourses = [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
        ];
    }
    trackCourse(newCourse) {
        return newCourse ? newCourse.id : undefined;
    }
    onSave(event) {
        console.log('button clicked', event);
    }
    onKeyUp(email) {
        console.log(email);
    }
    onEnterName() {
        console.log(this.name);
    }
    onEnterLastName() {
        console.log(this.lname);
    }
    onAdd() {
        this.studentGrades.push({ id: 5, name: 'student5', grade: 'A' });
    }
    onRemove(studentGrade) {
        let index = this.studentGrades.indexOf(studentGrade);
        console.log(index);
        this.studentGrades.splice(index, 1);
    }
    static { this.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(i0.ɵɵdirectiveInject(i1.CoursesService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoursesComponent, selectors: [["app-courses"]], decls: 91, vars: 65, consts: [[3, "hidden"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["courseList", ""], ["noCourses", ""], [1, "nav", "nav-pills"], [3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "btn", "btn-primay", 3, "click"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "glyphicon"], [1, "glyphicon", 3, "ngClass"], [3, "ngStyle"], ["type", "text", "name", "phone", "id", "phone", "appInputFormat", "", 3, "format"], ["type", "text", "name", "email", "id", "email", 3, "keyup.enter"], ["email", ""], ["type", "text", "name", "name", "id", "name", 3, "value", "keyup"], ["type", "text", "name", "name", "id", "name", 3, "ngModel", "ngModelChange", "keyup.enter"], ["border", "1px solid black"], [3, "colSpan"], [3, "src"], ["alt", "", 3, "src"], [1, "btn", "btn-danger", 3, "click"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
            const _r18 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "h3");
            i0.ɵɵtext(1, "ngIf");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵtext(3, "Show something");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CoursesComponent_div_4_Template, 1, 0, "div", 1);
            i0.ɵɵtemplate(5, CoursesComponent_ng_template_5_Template, 4, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(7, CoursesComponent_ng_template_7_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(9, "h3");
            i0.ɵɵtext(10, "ngSwitch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ul", 4)(12, "li")(13, "a", 5);
            i0.ɵɵlistener("click", function CoursesComponent_Template_a_click_13_listener() { return ctx.viewMode = "map"; });
            i0.ɵɵtext(14, "Map");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "li")(16, "a", 5);
            i0.ɵɵlistener("click", function CoursesComponent_Template_a_click_16_listener() { return ctx.viewMode = "list"; });
            i0.ɵɵtext(17, "List");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "div", 6);
            i0.ɵɵtemplate(19, CoursesComponent_div_19_Template, 2, 0, "div", 7);
            i0.ɵɵtemplate(20, CoursesComponent_div_20_Template, 2, 0, "div", 7);
            i0.ɵɵtemplate(21, CoursesComponent_div_21_Template, 2, 0, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "h3");
            i0.ɵɵtext(23, "ngFor local methods(index,first,etc)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 9);
            i0.ɵɵlistener("click", function CoursesComponent_Template_button_click_24_listener() { return ctx.onAdd(); });
            i0.ɵɵtext(25, "Add student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "ul");
            i0.ɵɵtemplate(27, CoursesComponent_li_27_Template, 4, 4, "li", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "h3");
            i0.ɵɵtext(29, "trackBy");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 11);
            i0.ɵɵlistener("click", function CoursesComponent_Template_button_click_30_listener() { return ctx.loadCourses(); });
            i0.ɵɵtext(31, "Load Courses");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "ul");
            i0.ɵɵtemplate(33, CoursesComponent_li_33_Template, 2, 2, "li", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "br");
            i0.ɵɵelementStart(35, "h3");
            i0.ɵɵtext(36, "ngClass");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "span", 13);
            i0.ɵɵtext(38, "test\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "span", 14);
            i0.ɵɵelementStart(40, "h3");
            i0.ɵɵtext(41, "ngStyle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "button");
            i0.ɵɵtext(43, " Save\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 15);
            i0.ɵɵtext(45, " Save\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(46, "br")(47, "br");
            i0.ɵɵelementStart(48, "h3");
            i0.ɵɵtext(49, "Custom Directives");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(50, "input", 16)(51, "br")(52, "br");
            i0.ɵɵelementStart(53, "input", 17, 18);
            i0.ɵɵlistener("keyup.enter", function CoursesComponent_Template_input_keyup_enter_53_listener() { i0.ɵɵrestoreView(_r18); const _r10 = i0.ɵɵreference(54); return i0.ɵɵresetView(ctx.onKeyUp(_r10.value)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "input", 19);
            i0.ɵɵlistener("keyup", function CoursesComponent_Template_input_keyup_55_listener() { return ctx.onEnterName(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "input", 20);
            i0.ɵɵlistener("ngModelChange", function CoursesComponent_Template_input_ngModelChange_56_listener($event) { return ctx.lname = $event; })("keyup.enter", function CoursesComponent_Template_input_keyup_enter_56_listener() { return ctx.onEnterLastName(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "button", 11);
            i0.ɵɵlistener("click", function CoursesComponent_Template_button_click_57_listener($event) { return ctx.onSave($event); });
            i0.ɵɵtext(58, " Save\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "h3");
            i0.ɵɵtext(60, "Course Details");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(61);
            i0.ɵɵpipe(62, "lowercase");
            i0.ɵɵpipe(63, "uppercase");
            i0.ɵɵelement(64, "br");
            i0.ɵɵtext(65);
            i0.ɵɵpipe(66, "number");
            i0.ɵɵelement(67, "br");
            i0.ɵɵtext(68);
            i0.ɵɵpipe(69, "number");
            i0.ɵɵelement(70, "br");
            i0.ɵɵtext(71);
            i0.ɵɵpipe(72, "currency");
            i0.ɵɵelement(73, "br");
            i0.ɵɵtext(74);
            i0.ɵɵpipe(75, "date");
            i0.ɵɵelement(76, "br");
            i0.ɵɵtext(77);
            i0.ɵɵpipe(78, "summary");
            i0.ɵɵelement(79, "br")(80, "br");
            i0.ɵɵelementStart(81, "table", 21)(82, "tr")(83, "td", 22);
            i0.ɵɵtext(84, "Testing");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "td", 22);
            i0.ɵɵtext(86, "Testing");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "td", 22);
            i0.ɵɵtext(88, "Testing");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(89, "img", 23)(90, "img", 24);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(6);
            const _r3 = i0.ɵɵreference(8);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", ctx.courses.length < 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.courses.length > 0)("ngIfThen", _r1)("ngIfElse", _r3);
            i0.ɵɵadvance(8);
            i0.ɵɵclassProp("active", ctx.viewMode == "map");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.viewMode == "list");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngSwitch", ctx.viewMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "map");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.studentGrades);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.newCourses)("ngForTrackBy", ctx.trackCourse);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("glyphicon-full", true)("glyphicon-empty", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction0(61, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("background-color", ctx.canSave ? "red" : "green")("color", ctx.canSave ? "blue" : "grey");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(62, _c1, ctx.canSave ? "red" : "green", ctx.canSave ? "blue" : "grey"));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("format", "lowercase");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.name);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.lname);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("background-color", ctx.isActive ? "red" : "green");
            i0.ɵɵclassProp("active", ctx.isActive);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("\nTitle : ", i0.ɵɵpipeBind1(62, 42, i0.ɵɵpipeBind1(63, 44, ctx.course.title)), "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("\nRatings : ", i0.ɵɵpipeBind2(66, 46, ctx.course.ratings, "2.2-2"), "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("\nNo Of Students : ", i0.ɵɵpipeBind1(69, 49, ctx.course.students), "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("\nPrice : ", i0.ɵɵpipeBind3(72, 51, ctx.course.price, "INR", true), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("\nRelease Date : ", i0.ɵɵpipeBind2(75, 55, ctx.course.releaseDate, "shortDate"), "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("\n", i0.ɵɵpipeBind2(78, 58, ctx.longText, 5), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("colSpan", ctx.colSpan);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("colSpan", ctx.colSpan);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("colSpan", ctx.colSpan);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("src", ctx.imageUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx.imageUrl, i0.ɵɵsanitizeUrl);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.InputFormatDirective, i2.UpperCasePipe, i2.LowerCasePipe, i2.DecimalPipe, i2.CurrencyPipe, i2.DatePipe, i5.SummaryPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoursesComponent, [{
        type: Component,
        args: [{ selector: 'app-courses', template: "<!-- *ngIf is a strucural directive which is used to conditionally display elements in DOM -->\n<!-- we can also achieve this by using hidden property -->\n<!-- only difference is *ngIf completely removes the element if it's false but hidden property will just hide it from \ndisplaying it so it will be in the DOM tree -->\n<!-- we have leading * for the structural directives what it does is it tells the angular to rewrite it using the ng-template\nAs angular does this in the backend we don't have to worry about the implementation -->\n<h3>ngIf</h3>\n<div [hidden]=\"courses.length < 0\">Show something</div>\n<div *ngIf=\"courses.length > 0; then courseList; else noCourses\"></div>\n<ng-template #courseList>\n  List of Courses: <br />\n  <ul>\n    <!-- *ngFor is similar to for loop in other languages it just iterates over the elements -->\n    <li *ngFor=\"let course of courses\">\n      {{ course }}\n    </li>\n  </ul>\n</ng-template>\n<ng-template #noCourses> No Courses yet </ng-template>\n\n<h3>ngSwitch</h3>\n\n<ul class=\"nav nav-pills\">\n  <li [class.active]=\"viewMode == 'map'\">\n    <a (click)=\"viewMode = 'map'\">Map</a>\n  </li>\n  <li [class.active]=\"viewMode == 'list'\">\n    <a (click)=\"viewMode = 'list'\">List</a>\n  </li>\n</ul>\n\n<!-- ngSwitch is similar to switch cases in other languages -->\n\n<div [ngSwitch]=\"viewMode\">\n  <div *ngSwitchCase=\"'map'\">Map Selected</div>\n  <div *ngSwitchCase=\"'list'\">List Selected</div>\n  <div *ngSwitchDefault>Selected somthing else</div>\n</div>\n\n<!-- similar to index we have other properties as well like (index, first, last, even, odd) -->\n<!-- Angular detects the changes and renders them even without refreshing the page -->\n<h3>ngFor local methods(index,first,etc)</h3>\n<button class=\"btn btn-primay\" (click)=\"onAdd()\">Add student</button>\n<ul>\n  <li *ngFor=\"let studentGrade of studentGrades; index as i\">\n    {{ i }} - {{ studentGrade.id }} {{ studentGrade.name }}\n    {{ studentGrade.grade }}\n    <button class=\"btn btn-danger\" (click)=\"onRemove(studentGrade)\">\n      Remove\n    </button>\n  </li>\n</ul>\n\n<!-- Every time we click on the below button it will rebuild the DOM even though it's the same data\nwe can stop this by using trackBy feature -->\n<!-- for normal application we don't need to used this trackBy feature as angular does a very good job in optimization\nIt's only for the specific scenarios where we have complex code and it' having a performance overhead -->\n<h3>trackBy</h3>\n<button class=\"btn btn-primary\" (click)=\"loadCourses()\">Load Courses</button>\n<ul>\n  <li *ngFor=\"let newCourse of newCourses; trackBy: trackCourse\">\n    {{ newCourse.id }} {{ newCourse.name }}\n  </li>\n</ul>\n\n<br />\n\n<!-- ngClass -->\n\n<!-- Instead of using class bindig multiple time we can achieve the same funationality using ngClass -->\n<h3>ngClass</h3>\n<span\n  class=\"glyphicon\"\n  [class.glyphicon-full]=\"true\"\n  [class.glyphicon-empty]=\"false\"\n  >test\n</span>\n\n<!-- here we can pass in all the class bindings directly to the ngClass directive -->\n<span\n  class=\"glyphicon\"\n  [ngClass]=\"{ 'glyphicon-full': true, 'glyphicon-empty': false }\"\n></span>\n\n<!-- ngStyle -->\n<!-- if we don't use ngStyle then our code looks clumsy like this -->\n<h3>ngStyle</h3>\n<button\n  [style.backgroundColor]=\"canSave ? 'red' : 'green'\"\n  [style.color]=\"canSave ? 'blue' : 'grey'\"\n>\n  Save\n</button>\n\n<!-- using ngStyle -->\n<!-- we have achieved the same functionality but with a lot cleaner code -->\n<button\n  [ngStyle]=\"{\n    backgroundColor: canSave ? 'red' : 'green',\n    color: canSave ? 'blue' : 'grey'\n  }\"\n>\n  Save\n</button>\n\n<br />\n<br />\n\n<!-- Custom Directives -->\n<h3>Custom Directives</h3>\n<!-- appInputFormat is the selector of the input-format-directive.ts -->\n<!-- we can pass it values to the directive as well -->\n<input\n  type=\"text\"\n  name=\"phone\"\n  id=\"phone\"\n  appInputFormat\n  [format]=\"'lowercase'\"\n/>\n\n<br /><br />\n\n<!-- (keyup.enter) is known as event filtering and it only calls that onKeyUp() method if enter button is clicked -->\n<!-- #email is the template variables which references the input field and we can access the value directly -->\n<input\n  type=\"text\"\n  name=\"email\"\n  id=\"email\"\n  (keyup.enter)=\"onKeyUp(email.value)\"\n  #email\n/>\n\n<!-- Here [value] doesn't support two way binding it's only from component to view not the other way -->\n<input\n  type=\"text\"\n  name=\"name\"\n  id=\"name\"\n  [value]=\"name\"\n  (keyup)=\"onEnterName()\"\n/>\n\n<!-- we can achieve two way binding using [(ngModel)] -->\n<input\n  type=\"text\"\n  name=\"name\"\n  id=\"name\"\n  [(ngModel)]=\"lname\"\n  (keyup.enter)=\"onEnterLastName()\"\n/>\n\n<!-- [class.active] is called class binding if the condition is true then it will add the active class  -->\n<!-- [style.backgroundColor] is called style binding based on the condition it will apply the background color -->\n<!-- (click) is called Event handler for click similarly we have other methods to bind the events -->\n\n<button\n  class=\"btn btn-primary\"\n  [class.active]=\"isActive\"\n  [style.backgroundColor]=\"isActive ? 'red' : 'green'\"\n  (click)=\"onSave($event)\"\n>\n  Save\n</button>\n\n<!-- Pipes -->\n<!-- uppercase, lowercase, number, currency, date -->\n<h3>Course Details</h3>\n<!-- we can chain the pipes as well -->\nTitle : {{ course.title | uppercase | lowercase }}<br />\n<!-- we can specify the number of integers and decimal points we need to display \nHer 2.2-2 represents 2 integer digits and min 2 decimal digits and maximum 2 decimal digits-->\nRatings : {{ course.ratings | number : \"2.2-2\" }}<br />\n<!-- It will make the number more readable by appending , to the number -->\nNo Of Students : {{ course.students | number }}<br />\n<!-- by default currency pipe shows the USD but we can change it by providing any other currency name\nin this case INR we can also pass other value which shows symbol or name based on true/false -->\nPrice : {{ course.price | currency : \"INR\" : true }} <br />\n<!-- we can pass in other parameters as well to transform the data as we wanted -->\nRelease Date : {{ course.releaseDate | date : \"shortDate\" }}<br />\n<!-- Here summay is a custom pipe we have created in summay.pipe.ts -->\n{{ longText | summary : 5 }}\n\n<br /><br />\n\n<table border=\"1px solid black\">\n  <tr>\n    <td [colSpan]=\"colSpan\">Testing</td>\n    <td [colSpan]=\"colSpan\">Testing</td>\n    <td [colSpan]=\"colSpan\">Testing</td>\n  </tr>\n</table>\n<!-- pulling data from component using {{}} is called string interpolation-->\n<img src=\"{{ imageUrl }}\" />\n<!-- we can use property binding as well \n but it's only works one way-->\n<img [src]=\"imageUrl\" alt=\"\" />\n" }]
    }], function () { return [{ type: i1.CoursesService }]; }, null); })();
//# sourceMappingURL=courses.component.js.map