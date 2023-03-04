import { TestBed } from '@angular/core/testing';
import { PanelComponent } from './panel.component';
describe('PanelComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PanelComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(PanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=panel.component.spec.js.map