'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
console.log(req.body)
if (req.body.text == '') {
  return res.json({ error: 'No text to translate' })
}
if (!req.body.text) {
  return res.json({ error: 'Required field(s) missing' })
}

if (req.body.locale != "american-to-british" && req.body.locale != "british-to-american"){
   return res.json({ error: 'Invalid value for locale field' })
}
  
if (req.body.locale == "american-to-british"){
let americanTranslate = translator.americanTranslate(req.body.text)

if (americanTranslate == req.body.text) {
  return res.json( { "text": req.body.text, "translation": "Everything looks good to me!" })
}
  
 return res.json( { "text": req.body.text, "translation":  americanTranslate  })
  
}

if (req.body.locale == "british-to-american"){
let britishTranslate = translator.britishTranslate(req.body.text)

if (britishTranslate == req.body.text) {
  return res.json( { "text": req.body.text, "translation": "Everything looks good to me!" })
}
  
 return res.json( { "text": req.body.text, "translation":  britishTranslate  })
  
}

      
    });
};
