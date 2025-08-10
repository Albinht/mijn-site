import { validator, schemas, requestSchemas } from '@/lib/security/validation';
import { z } from 'zod';

describe('Validation Library', () => {
  describe('Common Schemas', () => {
    describe('email validation', () => {
      it('should validate correct email', () => {
        const result = schemas.email.safeParse('test@example.com');
        expect(result.success).toBe(true);
      });

      it('should reject invalid email', () => {
        const result = schemas.email.safeParse('invalid-email');
        expect(result.success).toBe(false);
      });
    });

    describe('password validation', () => {
      it('should validate strong password', () => {
        const result = schemas.password.safeParse('StrongP@ss123');
        expect(result.success).toBe(true);
      });

      it('should reject weak password', () => {
        const weakPasswords = [
          'short',          // Too short
          'nouppercase123!', // No uppercase
          'NOLOWERCASE123!', // No lowercase
          'NoNumbers!',      // No numbers
          'NoSpecial123',    // No special characters
        ];

        weakPasswords.forEach(password => {
          const result = schemas.password.safeParse(password);
          expect(result.success).toBe(false);
        });
      });
    });

    describe('username validation', () => {
      it('should validate correct username', () => {
        const validUsernames = ['user123', 'test_user', 'john-doe'];
        
        validUsernames.forEach(username => {
          const result = schemas.username.safeParse(username);
          expect(result.success).toBe(true);
        });
      });

      it('should reject invalid username', () => {
        const invalidUsernames = [
          'ab',              // Too short
          'a'.repeat(31),    // Too long
          'user@name',       // Invalid character
          'user name',       // Space
        ];

        invalidUsernames.forEach(username => {
          const result = schemas.username.safeParse(username);
          expect(result.success).toBe(false);
        });
      });
    });

    describe('slug validation', () => {
      it('should validate correct slug', () => {
        const result = schemas.slug.safeParse('valid-slug-123');
        expect(result.success).toBe(true);
      });

      it('should reject invalid slug', () => {
        const invalidSlugs = [
          '',                // Empty
          'UPPERCASE',       // Uppercase letters
          'invalid slug',    // Space
          'invalid_slug',    // Underscore
        ];

        invalidSlugs.forEach(slug => {
          const result = schemas.slug.safeParse(slug);
          expect(result.success).toBe(false);
        });
      });
    });
  });

  describe('Request Validator', () => {
    describe('validate method', () => {
      it('should validate correct data', () => {
        const schema = z.object({
          name: z.string(),
          age: z.number(),
        });

        const result = validator.validate(schema, {
          name: 'John',
          age: 30,
        });

        expect(result.success).toBe(true);
        expect(result.data).toEqual({ name: 'John', age: 30 });
        expect(result.errors).toBeNull();
      });

      it('should return formatted errors for invalid data', () => {
        const schema = z.object({
          name: z.string(),
          age: z.number(),
        });

        const result = validator.validate(schema, {
          name: 123,
          age: 'thirty',
        });

        expect(result.success).toBe(false);
        expect(result.data).toBeNull();
        expect(result.errors).toBeInstanceOf(Array);
        expect(result.errors.length).toBeGreaterThan(0);
      });
    });

    describe('sanitize method', () => {
      it('should remove null bytes from strings', () => {
        const input = 'test\0string';
        const result = validator.sanitize(input);
        expect(result).toBe('teststring');
      });

      it('should trim whitespace', () => {
        const input = '  test  ';
        const result = validator.sanitize(input);
        expect(result).toBe('test');
      });

      it('should remove control characters', () => {
        const input = 'test\x00\x01\x02string';
        const result = validator.sanitize(input);
        expect(result).toBe('teststring');
      });

      it('should recursively sanitize objects', () => {
        const input = {
          name: '  John  ',
          nested: {
            value: 'test\0value',
          },
        };

        const result = validator.sanitize(input);
        expect(result).toEqual({
          name: 'John',
          nested: {
            value: 'testvalue',
          },
        });
      });

      it('should sanitize arrays', () => {
        const input = ['  item1  ', 'item2\0'];
        const result = validator.sanitize(input);
        expect(result).toEqual(['item1', 'item2']);
      });
    });

    describe('SQL injection detection', () => {
      it('should detect SQL injection patterns', () => {
        const sqlInjections = [
          "'; DROP TABLE users; --",
          "1 OR 1=1",
          "admin' --",
          "SELECT * FROM users",
          "UNION SELECT password FROM users",
        ];

        sqlInjections.forEach(input => {
          const result = validator.hasSQLInjection(input);
          expect(result).toBe(true);
        });
      });

      it('should not flag normal input as SQL injection', () => {
        const normalInputs = [
          'John Doe',
          'This is a normal comment',
          'user@example.com',
        ];

        normalInputs.forEach(input => {
          const result = validator.hasSQLInjection(input);
          expect(result).toBe(false);
        });
      });
    });

    describe('XSS detection', () => {
      it('should detect XSS patterns', () => {
        const xssPatterns = [
          '<script>alert("XSS")</script>',
          '<img src=x onerror=alert(1)>',
          'javascript:alert(1)',
          '<svg onload=alert(1)>',
          '<iframe src="javascript:alert(1)">',
        ];

        xssPatterns.forEach(input => {
          const result = validator.hasXSS(input);
          expect(result).toBe(true);
        });
      });

      it('should not flag normal HTML-like text as XSS', () => {
        const normalInputs = [
          'Price is < $100',
          'A > B',
          'Use <strong> tags for emphasis',
        ];

        normalInputs.forEach(input => {
          const result = validator.hasXSS(input);
          expect(result).toBe(false);
        });
      });
    });

    describe('Path traversal detection', () => {
      it('should detect path traversal patterns', () => {
        const pathTraversals = [
          '../../../etc/passwd',
          '..\\..\\windows\\system32',
          '..%2F..%2Fetc%2Fpasswd',
          '..%5C..%5Cwindows',
        ];

        pathTraversals.forEach(input => {
          const result = validator.hasPathTraversal(input);
          expect(result).toBe(true);
        });
      });

      it('should not flag normal paths', () => {
        const normalPaths = [
          '/home/user/documents',
          'C:\\Users\\Documents',
          './relative/path',
        ];

        normalPaths.forEach(input => {
          const result = validator.hasPathTraversal(input);
          expect(result).toBe(false);
        });
      });
    });

    describe('Security check', () => {
      it('should detect multiple threat types', () => {
        const maliciousInput = {
          sql: "'; DROP TABLE users; --",
          xss: '<script>alert(1)</script>',
          path: '../../../etc/passwd',
        };

        const result = validator.securityCheck(maliciousInput);
        
        expect(result.safe).toBe(false);
        expect(result.threats).toContain('SQL Injection');
        expect(result.threats).toContain('XSS');
        expect(result.threats).toContain('Path Traversal');
      });

      it('should pass safe input', () => {
        const safeInput = {
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a safe message',
        };

        const result = validator.securityCheck(safeInput);
        
        expect(result.safe).toBe(true);
        expect(result.threats).toEqual([]);
      });
    });
  });

  describe('Request Schemas', () => {
    describe('login schema', () => {
      it('should validate correct login data', () => {
        const data = {
          body: {
            username: 'testuser',
            password: 'password123',
          },
        };

        const result = validator.validate(requestSchemas.login, data);
        expect(result.success).toBe(true);
      });

      it('should reject invalid login data', () => {
        const data = {
          body: {
            username: 'ab', // Too short
            password: '',    // Empty
          },
        };

        const result = validator.validate(requestSchemas.login, data);
        expect(result.success).toBe(false);
      });
    });

    describe('createArticle schema', () => {
      it('should validate correct article data', () => {
        const data = {
          body: {
            title: 'Test Article',
            topic: 'Technology',
            slug: 'test-article',
            content: 'Article content here',
            status: 'DRAFT',
          },
        };

        const result = validator.validate(requestSchemas.createArticle, data);
        expect(result.success).toBe(true);
      });

      it('should allow optional fields', () => {
        const data = {
          body: {
            title: 'Test Article',
            topic: 'Technology',
            slug: 'test-article',
            // content and status are optional
          },
        };

        const result = validator.validate(requestSchemas.createArticle, data);
        expect(result.success).toBe(true);
      });
    });

    describe('list schema', () => {
      it('should validate and apply defaults', () => {
        const data = {
          query: {},
        };

        const result = validator.validate(requestSchemas.list, data);
        expect(result.success).toBe(true);
        expect(result.data.query.page).toBe(1);
        expect(result.data.query.limit).toBe(10);
        expect(result.data.query.sortOrder).toBe('desc');
      });

      it('should coerce string numbers', () => {
        const data = {
          query: {
            page: '2',
            limit: '20',
          },
        };

        const result = validator.validate(requestSchemas.list, data);
        expect(result.success).toBe(true);
        expect(result.data.query.page).toBe(2);
        expect(result.data.query.limit).toBe(20);
      });

      it('should enforce max limit', () => {
        const data = {
          query: {
            limit: '150',
          },
        };

        const result = validator.validate(requestSchemas.list, data);
        expect(result.success).toBe(false);
      });
    });
  });
});