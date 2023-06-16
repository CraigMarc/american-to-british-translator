'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body)
      
if (req.body.locale == "american-to-british"){
let americanTranslate = translator.americanTranslate(req.body.text)
  
 return res.json( { "text": req.body.text, "translation":  americanTranslate  })
  
}

if (req.body.locale == "british-to-american"){
let britishTranslate = translator.britishTranslate(req.body.text)
  
 return res.json( { "text": req.body.text, "translation":  britishTranslate  })
  
}

      
    });
};
