import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable() //decorator
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publisYear: 1925,
            isAvailable: true
        }
    ]

    //mencari data buku
    findAll(): Book[] {
        return this.books;
    }

    //menyimpan data buku
    create(book: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publisYear: book.publishedYear,
            isAvailable: true
        }

        //simpan ke database
        this.books.push(newBook);
        
        return newBook;
    }

    // menghapus data buku
    remove(id: number): Book | undefined {
        const index = this.books.findIndex(book => book.id === id);

        if (index === -1) {
            return undefined;
        }

        const deletedBook = this.books.splice(index, 1)[0];

        return deletedBook;
    }

    // memperbarui data buku
    update(id: number, book: CreateBookDto): Book | undefined {
        const index = this.books.findIndex(book => book.id === id);

        if (index === -1) {
            return undefined;
        }

        const updatedBook: Book = {
            id: id,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publisYear: book.publishedYear,
            isAvailable: true
        };

        this.books[index] = updatedBook;

        return updatedBook;
    }
}
