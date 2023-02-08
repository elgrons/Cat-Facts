// export default class CatFacts {
//   static getFacts(number) {
//     return fetch(`https://meowfacts.herokuapp.com/?count=${number}`);
//     .then (function(response) {
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${response.statusText}`;
//         throw new Error(errorMessage);
//       } else {
//         return response.json();
//       }
//     })
//     } .catch(function(error) {
//       return error;
//     });
//   }
// }