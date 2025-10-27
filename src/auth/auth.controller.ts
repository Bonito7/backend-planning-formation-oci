import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    
    if (!user) {
      throw new UnauthorizedException('Identifiants incorrects');
    }
    
    return this.authService.login(user);
  }

  @Post('validate')
  async validateToken(@Body() body: { token: string }) {
    try {
      // Cette méthode validera le token JWT
      // À implémenter selon vos besoins
      return { valid: true };
    } catch {
      throw new UnauthorizedException('Token invalide');
    }
  }
}