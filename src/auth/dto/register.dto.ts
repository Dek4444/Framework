import { IsNotEmpty, IsEmail, MinLength, MaxLength, IsString } from 'class-validator';

export class RegisterDto {
    @IsString({ message: 'Username harus berupa teks' })
    @IsNotEmpty({ message: 'Username harus diisi' })
    readonly username: string;

    @IsEmail({ message: 'Email tidak valid' })
    @IsNotEmpty({ message: 'Email harus diisi' })
    readonly email: string;

    @IsString({ message: 'Password harus berupa teks' })
    @IsNotEmpty({ message: 'Password harus diisi' })
    @MinLength(3, { message: 'Password minimal 3 karakter' })
    @MaxLength(16, { message: 'Password maksimal 16 karakter' })
    readonly password: string;

    @IsString({ message: 'Konfirmasi Password harus berupa teks' })
    @IsNotEmpty({ message: 'Konfirmasi Password harus diisi' })
    readonly confirmPassword: string;
}