function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
    lookup[key] = lookup[key] || lookup[key] + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let key = str2[i];

    if (!lookup[key]) {
      return false;
    } else {
      lookup[key] -= 1;
    }
  }
  return true;
}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
