
export class AuthenticationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AuthenticationError';

        // This line is necessary for proper prototype chain setup in TypeScript
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}