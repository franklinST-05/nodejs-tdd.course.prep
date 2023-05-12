import { describe, expect, test } from 'vitest';
import { SignUpController } from './signup';

const makeSUT = () => {
    const sut = new SignUpController();
    return { sut };
};

describe('controller:signup', () => {

    test('should returns 400 if no name is provided', () => {
        const { sut } = makeSUT();
        const httpRequest = {
            body: {
                // name: 'John Doe',
                email: 'johndoe@gmail.com',
                password: 'qwe123',
                confirmPassword: 'qwe123'
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    });

});