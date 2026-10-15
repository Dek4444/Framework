import { validate } from 'class-validator';
import { LoginDto } from './login.dto.js';

describe('LoginDto', () => {
  const createDto = (username: string, password: string): LoginDto =>
    Object.assign(new LoginDto(), { username, password });

  it('rejects missing credentials', async () => {
    const errors = await validate(new LoginDto());

    expect(errors.map(({ property }) => property)).toEqual(
      expect.arrayContaining(['username', 'password']),
    );
  });

  it.each([
    ['', '123'],
    ['aurel', ''],
    ['aurel', '12'],
    ['aurel', '12345678901234567'],
    ['aurel', '12a'],
  ])('rejects invalid credentials', async (username, password) => {
    const errors = await validate(createDto(username, password));

    expect(errors.length).toBeGreaterThan(0);
  });

  it.each(['123', '1234567890123456'])(
    'accepts a numeric password with valid length: %s',
    async (password) => {
      const errors = await validate(createDto('aurel', password));

      expect(errors).toHaveLength(0);
    },
  );
});
