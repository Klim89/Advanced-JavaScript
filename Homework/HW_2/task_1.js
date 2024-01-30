// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

"use strict";

class Library {
  #books;
  constructor(initialBooks = []) {
    if (new Set(initialBooks).size !== initialBooks.length) {
      throw new Error("Cписок книг содержит дубликаты");
    }
    this.#books = [...initialBooks];
  }
  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(
        `Книга с названием "${title}" уже существует в библиотеке`
      );
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книги с названием "${title}" нет в библиотеке.`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

try {
  const library = new Library(["Book1", "Book2", "Book3"]);

  console.log(library.allBooks);

  library.addBook("Book4");
  console.log(library.allBooks);

  library.removeBook("Book2");
  console.log(library.allBooks);

  console.log(library.hasBook("Book1"));
  console.log(library.hasBook("Book2"));

  // Попытка добавить книгу с существующим названием
  library.addBook("Book1");
  // Попытка удалить несуществующую книгу
  library.removeBook("Book5");
} catch (error) {
  console.error(error.message);
}
