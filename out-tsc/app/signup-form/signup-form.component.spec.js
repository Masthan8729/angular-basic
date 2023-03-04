import { TestBed } from '@angular/core/testing';
import { SignupFormComponent } from './signup-form.component';
describe('SignupFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignupFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SignupFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=signup-form.component.spec.js.map