class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatText() {
    return `"${this.text}"`;
  }

  formatAuthor() {
    return `© ${this.author}`;
  }
}

new Quote();

// // URL на сырой файл JSON
// const url =
//   "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json";

// // Получение случайной цитаты
// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Ошибка HTTP: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Получение случайной цитаты
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const randomQuote = data[randomIndex];

//     // Вывод случайной цитаты
//     console.log(`"${randomQuote.quoteText}" — ${randomQuote.quoteAuthor}`);
//   })
//   .catch((error) => console.error(`Ошибка загрузки данных: ${error.message}`));

export default Quote;
