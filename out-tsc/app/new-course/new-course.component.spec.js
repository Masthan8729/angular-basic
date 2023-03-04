import { TestBed } from '@angular/core/testing';
import { NewCourseComponent } from './new-course.component';
describe('NewCourseComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NewCourseComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NewCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-course.component.spec.js.map