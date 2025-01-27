import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  /**
   * 1. Each async function returns Promise
   * 2. If on the "await" line of code Promise is rejected, code in the same block
   * below "await" is not executed"
   * 3. Promise returned by the getEandomQuoteViaAPI function will be always "fulfilled"
   * because we catch all possible errors
   * 4. Result of the fulfilled promise will be either Quote or underfined
   * 5. Therefore there is no need for try/catch block where we call this function
   */

  /**
   * 1. Любая асинхронная функция возвращает промис
   * 2. ЕСли на строке с "await" промис отклоняется, то код ниже в этом же блоке
   * не выполняется
   * 3. Промис, который возвращает функция getEandomQuoteViaAPI всегда будет "fulfilled",
   * потому что есть try/catch блок
   * 4. Результатом fulfilled промиса будет  Quote или underfined
   * 5. Следовательно нет необходимости использовать try/catch, где мы вызываем эту функцию
   */
  static async getRandomQuoteViaAPI() {
    const url = "https://api.agify.io/?name=meelad";
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const { count: id, name: content, age: author } = await response.json();
      // resolves promise to Quote (promise becoes "fulfilled")
      return new Quote(id, content, author);
    } catch (error) {
      console.error(error);
      /**
       * 1. Returns undefined implicitly (resolved promise to undefined)
       * 2. Promise becomes "fulfilled"
       */
    }
  }

  // static getRandomQuoteViaAPI() {
  //   const url = "https://api.agify.io/?name=meelad";
  //   const options = { headers: { "Content-Type": "application/json" } };

  //   return fetch(url, options)
  //     .then((response) => response.json())
  //     .then(
  //       ({ count: id, name: content, age: author }) =>
  //         new Quote(id, content, author)
  //     )
  //     .catch((error) => console.error(error));
  // }
}

export default RandomQuote;
