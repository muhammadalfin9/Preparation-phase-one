function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  //lalu bandingkan dengan sentence
  function balik(sentence){
    if(sentence.length <= 0) return '';
    return balik(sentence.slice(1)) +sentence[0]
  }
  return sentence == balik(sentence) ? true : false
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
