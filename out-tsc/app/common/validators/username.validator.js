export class UserNameValidator {
    static cannotContainsSpace(control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainsSpace: true };
        return null;
    }
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'masthan')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}
//# sourceMappingURL=username.validator.js.map