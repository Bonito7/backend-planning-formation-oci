import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'apprenant';
}

@Injectable()
export class AuthService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'FormationOrange2025',
      role: 'admin',
    },
    {
      id: 2,
      username: 'apprenant', 
      password: 'apprenant123',
      role: 'apprenant',
    },
  ];

  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<Omit<User, 'password'> | null> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Omit<User, 'password'>) {
    const payload = { 
      username: user.username, 
      sub: user.id, 
      role: user.role 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return { valid: true, user: payload };
    } catch {
      return { valid: false };
    }
  }
}