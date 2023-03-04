import { Component } from '@angular/core';
import { BadInputError } from '../common/bad-input.error';
import { NotFoundError } from '../common/not-found.error';
import * as i0 from "@angular/core";
import * as i1 from "../services/post.service";
import * as i2 from "@angular/common";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deletePost(post_r2)); });
    i0.ɵɵtext(2, " Delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", post_r2.title, " ");
} }
export class PostsComponent {
    constructor(service) {
        this.service = service;
        // we shouldn't write any code in the constructor and it should be only used for initialization
        // In order to execute this once the compoment renders we can use Angular lifecycle hooks(ngOnInIt,ngOnchanges,etc)
        // we can use ngOnInit in this case as it executes once the component is rendered
        // http.get(this.url).subscribe((response) => {
        //   this.posts = response;
        //   console.log(this.posts);
        //   console.log(typeof this.posts);
        // });
    }
    // In the below methods we have repeatedly used the unexpected error log which doesn't look clean
    // we create an ErrorHandler for the Unexpected errors
    // we have Optimistic and Pessimistic udpates
    // Optimistic updates --> Instead of waiting for the response from the client we directly update the UI element
    // and if there are any errors then we rollback the change in the UI. As we are not waiting for the server it renders the changes in the UI quickly
    // Pessimistinc updates --> we display the content only after the success response from the server this can be slow compared to Optimistic updates
    ngOnInit() {
        // until we subscribe to an observable it won't make a call to the server
        // Observables are lazy in contrast to Promises which are eager
        this.service.getPosts().subscribe((response) => {
            this.posts = response;
            console.log(this.posts);
            console.log(typeof this.posts);
        }
        // As we have create a custom ErrorHandler we don't need to write this block
        // (error: Response) => {
        //   console.log('Unexpected error occured', error);
        // }
        );
    }
    createPost(input) {
        let post = { title: input.value };
        // As part of Optmistic updates we update the list even before the response from the server
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.createPost(post).subscribe((response) => {
            let test = response;
            post.id = response.id;
            // this.posts.splice(0, 0, post);
            console.log(test.id);
        }, (error) => {
            console.log('AppError');
            // once we got an error then we just remove it from the list
            this.posts.splice(0, 1);
            if (error instanceof BadInputError) {
                // currently we don't have a form but we can set the individual field erros like this
                // this.form.setErrors(error);
            }
            // Here we are just throwing this error so that our custom Error Handler will pick it up
            // If we don't throw this error then it will be handled here itself
            else
                throw error;
        });
    }
    updatePost(post) {
        let newTitle = 'Hello';
        // we can use patch or put to update the record
        // we use patch when we just want to update few properties of the object (it will send specific properies to the server)
        // put is used to update the whole record(even though we are updating a few properies we must send the whole object)
        this.service.updatePost(post).subscribe((response) => {
            console.log(response);
            let index = this.posts.indexOf(post);
            this.posts[index].title = newTitle;
            console.log(this.posts[index].title);
        });
    }
    deletePost(post) {
        this.service.deletePost(345).subscribe((response) => {
            console.log('in delete post');
            console.log(response);
            if (Object.keys(response).length === 0) {
                throw new NotFoundError();
            }
            console.log(response);
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
        }, (error) => {
            console.log('errorr');
            if (error instanceof NotFoundError) {
                console.log('No record found with this ID', error);
            }
            else
                throw error;
        });
    }
    static { this.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["app-posts"]], decls: 4, vars: 1, consts: [["type", "text", "name", "title", "id", "title", 1, "form-control", 3, "keyup.enter"], ["title", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.createPost(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 2);
            i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 4, 1, "li", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.posts);
        } }, dependencies: [i2.NgForOf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'app-posts', template: "<input\n  type=\"text\"\n  name=\"title\"\n  id=\"title\"\n  class=\"form-control\"\n  #title\n  (keyup.enter)=\"createPost(title)\"\n/>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let post of posts\">\n    <button class=\"btn btn-danger btn-sm\" (click)=\"deletePost(post)\">\n      Delete\n    </button>\n    {{ post.title }}\n  </li>\n</ul>\n" }]
    }], function () { return [{ type: i1.PostService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map