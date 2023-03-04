import { ElementRef } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';
describe('InputFormatDirective', () => {
    it('should create an instance', () => {
        let el = new ElementRef('hello');
        const directive = new InputFormatDirective(el);
        expect(directive).toBeTruthy();
    });
});
//# sourceMappingURL=input-format.directive.spec.js.map