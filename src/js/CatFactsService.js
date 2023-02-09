export default class CatFactsService {
  static getFacts(number, language) {
    return fetch(`https://meowfacts.herokuapp.com/?count=${number}&lang=${language}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `hiss hiss! There was an error accessing your cat facts`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(errorMessage) {
        return errorMessage;
      });
  }
}