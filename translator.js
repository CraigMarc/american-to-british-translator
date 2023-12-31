const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

let britishToAmericanTitles = {
  'Mr': 'Mr.',
  'Mrs': 'Mrs.',
  'Ms': 'Ms.',
  'Mx': 'Mx.',
  'Dr': 'Dr.',
  'Prof': 'Prof.'
}

let britishToAmericanSpelling = { "caramelise": "caramelize",
  "caramelised": "caramelized",
  "caramelises": "caramelizes",
  "caramelising": "caramelizing",
  "carbonise": "carbonize",}


class Translator {



/*replace function*/

searchAndReplace(library, text){
  let americanOnlyKeys = Object.keys(library)
  let amerMatch = americanOnlyKeys.filter(function(x){return new RegExp(x,"i").test(text)})
 
  let replace = ''
  let counter = 0
  if (amerMatch.length == 0){
    return text
  }
  for (let i = 0; i < amerMatch.length; i++) {
    counter = counter + 1
  
    
    if (counter > 1){
    
      replace = replace.replace(new RegExp(amerMatch[i] + " ", "i"), `<span class="highlight">${library[amerMatch[i]]}</span>` + " ")

 replace = replace.replace(new RegExp(amerMatch[i] + "\\.", "i"), `<span class="highlight">${library[amerMatch[i]]}</span>` + ".")


    }

 
    
    else{
  replace = text.replace(new RegExp(amerMatch[i] + " ", "i"), `<span class="highlight">${library[amerMatch[i]]}</span>` + " ")

 replace = replace.replace(new RegExp(amerMatch[i] + "\\.", "i"), `<span class="highlight">${library[amerMatch[i]]}</span>` + ".")

    }
    
  }
  
  return replace
}

searchAndReplaceTitle(library, text){
  let americanOnlyKeys = Object.keys(library)
  let amerMatch = americanOnlyKeys.filter(function(x){return new RegExp(x,"i").test(text)})
 
  let replace = ''
  let counter = 0
  if (amerMatch.length == 0){
    return text
  }
  for (let i = 0; i < amerMatch.length; i++) {
    counter = counter + 1
  
    
    if (counter > 1){
    
      replace = replace.replace(new RegExp(amerMatch[i] + " ", "i"), `<span class="highlight">${library[amerMatch[i]]}</span>` + " ")

    }

 
    
    else{
  replace = text.replace(new RegExp(amerMatch[i] + " ", "i"), `<span class="highlight">${library[amerMatch[i]]}</span>` + " ")

    }
    
  }
  
  return replace
}
/*time replace function*/



timeReplace(text){
  if (/([0-1]?[0-2]):([0-5][0-9])/g.test(text) == true){
let replace = text.replace(/([0-1]?[0-2]):([0-5][0-9])/g, `<span class="highlight">$1.$2</span>`) 
return replace
  }
if (/([0-1]?[0-2]):([0-5][0-9])/g.test(text) == false){
let replace = text.replace(/([0-9]):([0-5][0-9])/g, `<span class="highlight">$1.$2</span>`)
return replace
}



 return replace 
  
}

timeReplaceBritish(text){

  if (/([0-1]?[0-2]).([0-5][0-9])/g.test(text) == true){
let replace = text.replace(/([0-1]?[0-2]).([0-5][0-9])/g, `<span class="highlight">$1:$2</span>`) 
return replace
  }
if (/([0-1]?[0-2]).([0-5][0-9])/g.test(text) == false){
let replace = text.replace(/([0-9]).([0-5][0-9])/g, `<span class="highlight">$1:$2</span>`)
return replace
}



 return replace 
  
  
}







/*translate american to british*/
americanTranslate(text){
let americanOnlyReplace = this.searchAndReplace(americanOnly, text)

let americanToBritishSpellingReplace = this.searchAndReplace(americanToBritishSpelling, americanOnlyReplace)

let americanToBritishTitlesReplace = this.searchAndReplaceTitle(americanToBritishTitles, americanToBritishSpellingReplace)


let americanTimeReplace = this.timeReplace(americanToBritishTitlesReplace)

return americanTimeReplace
}

/*translate british to american*/
britishTranslate(text){
let britishOnlyReplace = this.searchAndReplace(britishOnly, text)

let britishToAmericanTitlesReplace = this.searchAndReplaceTitle(britishToAmericanTitles, britishOnlyReplace)
let britishTimeReplace = this.timeReplaceBritish(britishToAmericanTitlesReplace)
let britishFinal = this.searchAndReplace(britishToAmericanSpelling, britishTimeReplace)
  
return britishFinal
}


}

module.exports = Translator;
