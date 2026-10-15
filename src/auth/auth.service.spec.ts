import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service.js';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('logs in with a username and password', () => {
    expect(service.login({ username: 'aurel', password: '123' })).toMatchObject({
      username: 'aurel',
      password: '123',
    });
  });
});