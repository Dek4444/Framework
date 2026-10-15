import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty({message: 'isi judul wokk'})
    readonly title: string;

    @IsNotEmpty({message: 'isi author wokk'})
    readonly author: string;

    @IsInt({message: 'isi tahun wokk'})
    readonly isbn: string;

    @IsInt({message: 'isi tahun wokk'})
    readonly publishedYear: number;
}