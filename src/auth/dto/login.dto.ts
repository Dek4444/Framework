import { IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';

export class LoginDto {
    @IsString({ message: 'Username harus berupa teks' })
    @IsNotEmpty({ message: 'Username harus diisi' })
    readonly username: string;

    @IsString({ message: 'Password harus berupa teks' })
    @IsNotEmpty({ message: 'Password harus diisi' })
    @IsNumberString({}, { message: 'Password hanya boleh berisi angka' })
    @Length(3, 16, { message: 'Password harus terdiri dari 3 sampai 16 angka' })
    readonly password: string;
}