import { validate } from 'class-validator';
import { RegisterDto } from './register.dto.js';

describe('RegisterDto', () => {
  const createDto = (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  ): RegisterDto =>
    Object.assign(new RegisterDto(), {
      username,
      email,
      password,
      confirmPassword,
    });

  it('rejects missing fields', async () => {
    const errors = await validate(new RegisterDto());

    expect(errors.map(({ property }) => property)).toEqual(
      expect.arrayContaining(['username', 'email', 'password', 'confirmPassword']),
    );
  });

  it.each([
    ['', 'user@example.com', '123', '123'],
    ['aurel', 'invalid-email', '123', '123'],
    ['aurel', 'user@example.com', '12', '12'],
    ['aurel', 'user@example.com', '12345678901234567', '12345678901234567'],
    ['aurel', 'user@example.com', '12a', '12a'],
    ['aurel', 'user@example.com', '123', '321'],
  ])('rejects invalid registration data', async (...values) => {
    const errors = await validate(createDto(...values));

    expect(errors.length).toBeGreaterThan(0);
  });

  it.each(['123', '1234567890123456'])(
    'accepts matching numeric passwords with valid length: %s',
    async (password) => {
      const errors = await validate(
        createDto('aurel', 'user@example.com', password, password),
      );

      expect(errors).toHaveLength(0);
    },
  );
});
