// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicСompositions = [
  { title: "Безграничный мир", author: "Александра", year: "2023" },
  { title: "Эхо времени", author: "Сергей Иванов", year: "2021" },
  { title: "Fahrenheit 451", author: "Наталья Петрова", year: "2022" },
];

const musicCollection = {
  musicСompositions: [...musicСompositions],
  [Symbol.iterator]: function () {
    let countСompositions = 0;
    return {
      next: () => {
        if (countСompositions >= this.musicСompositions.length) {
          return { done: true };
        } else {
          return {
            value: this.musicСompositions[countСompositions++],
            done: false,
          };
        }
      },
    };
  },
};

for (const music of musicCollection) {
  console.log(music.title, music.author, music.year);
}
