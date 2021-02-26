// place all alphabet chars in one string
let smallAlphabetChars = () => {
  let alphabet = "";
  new Array(26).fill("*").forEach((_, index) => {
    alphabet += (index + 10).toString(36);
  });
  return alphabet;
};
// empty 26x26 matrix
const emptyMatrix = () =>
  new Array(26).fill(" ").map((_) =>
    Array(26)
      .fill(" ")
      .map((element) => element)
  );

module.exports = { smallAlphabetChars, emptyMatrix };
