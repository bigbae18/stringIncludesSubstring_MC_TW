const cadenaContieneSubcadena = require('../index');

describe("cadena contiene subcadena", () => {
    test("it should return true if string includes substring", () => {

        const string1 = "Hola que tal";
        const string2 = "qu";

        const actual = cadenaContieneSubcadena(string1, string2);

        const expected = true;

        expect(actual).toBe(expected);

    });

    test("it should return false if string not includes substring", () => {
    
      const string1 = "Hola que tal";
      const string2 = "bien";

      const actual = cadenaContieneSubcadena(string1, string2);

      const expected = false;

      expect(actual).toBe(expected);
      
    });

});
  