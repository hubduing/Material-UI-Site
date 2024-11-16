import { validateEmail, validatePassword } from './validation';

describe('Validation Functions', () => {
  describe('validateEmail', () => {
    test('should return true for valid email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true);
      expect(validateEmail('user@subdomain.example.com')).toBe(true);
      expect(validateEmail('user@domain.co.in')).toBe(true);
    });

    test('should return false for invalid email addresses', () => {
      expect(validateEmail('plainaddress')).toBe(false);
      expect(validateEmail('@missingusername.com')).toBe(false);
      expect(validateEmail('username@.com')).toBe(false);
      expect(validateEmail('username@domain..com')).toBe(false);
      expect(validateEmail('username@domain.com.')).toBe(false);
      expect(validateEmail('username@domain.')).toBe(false);
      expect(validateEmail('username@domain.c')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    test('should return true for valid passwords', () => {
      expect(validatePassword('Password1!')).toBe(true);
      expect(validatePassword('A1b2c3!')).toBe(true);
      expect(validatePassword('StrongPass123!')).toBe(true);
      expect(validatePassword('123!abcDEF')).toBe(true);
    });

    test('should return false for invalid passwords', () => {
      expect(validatePassword('short')).toBe(false);
      expect(validatePassword('NoSpecialChar123')).toBe(false);
      expect(validatePassword('NoNumber!')).toBe(false);
      expect(validatePassword('!@#$%^&*')).toBe(false);
      expect(validatePassword('123456')).toBe(false);
      expect(validatePassword('')).toBe(false);
    });
  });
});
