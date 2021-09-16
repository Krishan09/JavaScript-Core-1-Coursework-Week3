/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

//function getLanes() {}
// Got this working using includes() also but went with the hint
function getLanes(streetNames) {
  let namesWithLane = streetNames.filter((streetName) => {
    return streetName.indexOf("Lane") > 0;
  });

  return namesWithLane;
}




/* ======= TESTS - DO NOT MODIFY ===== */

test("getLanes function works", () => {
  const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];

  expect(getLanes(streetNames)).toEqual(["Abchurch Lane", "Addle Lane"]);
});
