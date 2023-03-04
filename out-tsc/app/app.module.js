import { ErrorHandler } from '@angular/core';
import { SummaryPipe } from './summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            { provide: ErrorHandler, useClass: AppErrorHandler },
            DataService,
            PostService,
        ], imports: [BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forRoot([
                {
                    path: '',
                    component: HomeComponent,
                },
                {
                    // we can multiple query params as well
                    path: 'followers/:id/:username',
                    component: GithubProfileComponent,
                },
                {
                    path: 'followers',
                    component: GithubFollowersComponent,
                },
                {
                    path: 'posts',
                    component: PostsComponent,
                },
                {
                    path: '**',
                    component: NotFoundComponent,
                },
            ])] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    CoursesComponent,
                    SummaryPipe,
                    FavouriteComponent,
                    PanelComponent,
                    InputFormatDirective,
                    ContactFormComponent,
                    SignupFormComponent,
                    NewCourseComponent,
                    PostsComponent,
                    GithubFollowersComponent,
                    NavbarComponent,
                    HomeComponent,
                    GithubProfileComponent,
                    NotFoundComponent,
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule.forRoot([
                        {
                            path: '',
                            component: HomeComponent,
                        },
                        {
                            // we can multiple query params as well
                            path: 'followers/:id/:username',
                            component: GithubProfileComponent,
                        },
                        {
                            path: 'followers',
                            component: GithubFollowersComponent,
                        },
                        {
                            path: 'posts',
                            component: PostsComponent,
                        },
                        {
                            path: '**',
                            component: NotFoundComponent,
                        },
                    ]),
                ],
                // Here we are telling the angular to user our AppErrorHandler wherever we are using the Default ErrorHandler
                providers: [
                    { provide: ErrorHandler, useClass: AppErrorHandler },
                    DataService,
                    PostService,
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        CoursesComponent,
        SummaryPipe,
        FavouriteComponent,
        PanelComponent,
        InputFormatDirective,
        ContactFormComponent,
        SignupFormComponent,
        NewCourseComponent,
        PostsComponent,
        GithubFollowersComponent,
        NavbarComponent,
        HomeComponent,
        GithubProfileComponent,
        NotFoundComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map