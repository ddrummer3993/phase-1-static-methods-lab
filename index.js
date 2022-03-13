class Formatter {
  //add static methods here
  static capitalize(string) {
    let word = string.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    return word
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    let exceptionArray = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']);
    let wordArray = string.split(' ');
    let firstWord = this.capitalize(wordArray[0]);
    wordArray.shift();
    let newArray = wordArray.map(word => {
      word = exceptionArray.has(word) ? word.toLowerCase() : word[0].toUpperCase() + word.substring(1);
      return word;
    });
    newArray.unshift(firstWord)
    return newArray.join(' ');
  }
}

//console.log(Formatter.titleize('hello there! the sun looks nice and there is an apple by the table from granny.'));