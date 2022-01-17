/*
oneAway problem

Given a couple of strings, write a function that determines whether they are one edit away from each other. The edits can be one of the following-

1. insert a character
2. remove a character
3. replace a character

Examples:
1. ("pale", "ple") => true // /ple./ -- insert a character 
2. ("pale", "kale") => true // pale -> _ale, pale -> k_le
3. ("pale", "pales") => true
4. ("pale", "bake") => false
*/
function isOneAway(string1: string, string2: string) {
  if (string1.length === string2.length) {
    if (string1 === string2) {
      return true;
    } else {
      // both are of same length check only for replacement
      const length = string1.length;
      for (let i = 0; i < length; i += 1) {
        const regex = `^${string2}$`.split("");
        regex[i + 1] = "_";
        const regexp = new RegExp(regex.join(""));
        // if (regexp.test(string1)) {
        //   return true;
        // }
        const match = regexp.test(string1);
        console.log({ regexp, match });
        if (match) return true;
      }
      return false;
    }
  } else if (
    string1.length === string2.length - 1 ||
    string2.length === string1.length - 1
  ) {
    // check for removal & insertion here
  } else {
    return false;
  }
}
const w1 = "pale",
  w2 = "kale";
const result = isOneAway(w1, w2);
console.log({ w1, w2, result });
