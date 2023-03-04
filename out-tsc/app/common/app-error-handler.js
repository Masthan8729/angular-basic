import { NotFoundError } from './not-found.error';
export class AppErrorHandler {
    handleError(error) {
        if (error instanceof NotFoundError) {
            console.log('No record exist with this ID');
        }
        else {
            console.log('An unexpected error occured');
        }
        console.log(error);
    }
}
//# sourceMappingURL=app-error-handler.js.map