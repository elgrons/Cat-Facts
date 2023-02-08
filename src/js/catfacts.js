export default class CatFacts {
  static async getFacts(number) {
    try {
      const response = await fetch(`https://meowfacts.herokuapp.com/?count=${number}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } 
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}