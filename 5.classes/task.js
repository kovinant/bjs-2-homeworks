// Классы для печатных изданий
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  // Класс библиотеки
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find(book => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const bookIndex = this.books.findIndex(book => book.name === bookName);
      if (bookIndex !== -1) {
        return this.books.splice(bookIndex, 1)[0];
      }
      return null;
    }
  }
  
  // Класс студента
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      } else {
        console.log("Ошибка, оценка должна быть числом от 2 до 5");
      }
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject] || this.marks[subject].length === 0) {
        return 0;
      }
      const sumOfMarks = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
      return sumOfMarks / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
      const sumOfAverages = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
      return sumOfAverages / subjects.length;
    }
  }



const library = new Library("Библиотека имени Ленина");
library.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
library.addBook(new Magazine("Forbes", 2021, 150));

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(3, "математика");

document.getElementById('findBook').addEventListener('click', function() {
  const book = library.findBookBy("name", "Война и мир");
  document.getElementById('bookOutput').textContent = book ? JSON.stringify(book, null, 2) : "Книга не найдена";
});

document.getElementById('giveBook').addEventListener('click', function() {
  const book = library.giveBookByName("Война и мир");
  document.getElementById('bookOutput').textContent = book ? "Книга выдана: " + JSON.stringify(book, null, 2) : "Книга не найдена или уже выдана";
});

document.getElementById('addMark').addEventListener('click', function() {
  student.addMark(5, "химия");
  document.getElementById('studentOutput').textContent = "Оценка добавлена";
});

document.getElementById('showAverage').addEventListener('click', function() {
  const average = student.getAverage();
  document.getElementById('studentOutput').textContent = "Средняя оценка: " + average.toFixed(2);
});
document.getElementById('addMarkBtn').addEventListener('click', function() {
    const subject = document.getElementById('subject').value;
    const mark = parseInt(document.getElementById('mark').value, 10);
  
    if (subject && !isNaN(mark)) {
      student.addMark(mark, subject);
      document.getElementById('studentOutput').textContent = `Оценка ${mark} по предмету "${subject}" добавлена.`;
      document.getElementById('subject').value = '';
      document.getElementById('mark').value = '';
    } else {
      document.getElementById('studentOutput').textContent = "Пожалуйста, введите корректную оценку и название предмета.";
    }
  });
