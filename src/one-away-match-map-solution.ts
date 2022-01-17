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
  const charMap1 = {};
  const charMap2 = {};
  string1.split("").forEach((char) => {
    charMap1[char] = (charMap1[char] || 0) + 1;
  });
  string2.split("").forEach((char) => {
    charMap2[char] = (charMap2[char] || 0) + 1;
  });
  let match = 0;
  Object.keys(charMap1).forEach((key) => {
    if (charMap1[key] && charMap2[key]) match += 1;
  });
  if (match >= Object.keys(charMap1).length - 1) {
    return true;
  } else {
    return false;
  }
}
const w1 = "pale",
  w2 = "ales";
const result = isOneAway(w1, w2);
console.log({ w1, w2, result });
