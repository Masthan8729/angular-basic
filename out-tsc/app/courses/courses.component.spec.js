import { TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
describe('CoursesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CoursesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CoursesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=courses.component.spec.js.map