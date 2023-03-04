import { TestBed } from '@angular/core/testing';
import { FavouriteComponent } from './favourite.component';
describe('FavouriteComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FavouriteComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(FavouriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favourite.component.spec.js.map