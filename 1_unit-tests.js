const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {

/*test1*/
 test('Translate Mangoes are my favorite fruit. to British English', function(done) {
    var input = 'Mangoes are my favorite fruit.'
   
    assert.equal(translator.americanTranslate(input), 'Mangoes are my <span class="highlight">favourite</span> fruit.' );
    done();
  });

/*test2*/
 test('Translate I ate yogurt for breakfast. to British English', function(done) {
    var input = 'I ate yogurt for breakfast.'
   
    assert.equal(translator.americanTranslate(input), 'I ate <span class="highlight">yoghurt</span> for breakfast.' );
    done();
  });

  /*test3*/

   test("Translate We had a party at my friend's condo. to British English", function(done) {
    var input = "We had a party at my friend's condo."
   
    assert.equal(translator.americanTranslate(input), 'We had a party at my friend\'s <span class="highlight">flat</span>.' );
    done();
  });


  /*test4*/
  
  test("Translate Can you toss this in the trashcan for me? to British English", function(done) {
    var input = "Can you toss this in the trashcan for me?"
   
    assert.equal(translator.americanTranslate(input), 'Can you toss this in the <span class="highlight">bin</span> for me?' );
    done();
  });

  /*test5*/
  test("Translate The parking lot was full. to British English", function(done) {
    var input = "The parking lot was full."
   
    assert.equal(translator.americanTranslate(input), 'The <span class="highlight">car park</span> was full.' );
    done();
  });

  /*test6*/
    test("Translate Like a high tech Rube Goldberg machine. to British English", function(done) {
    var input = "Like a high tech Rube Goldberg machine."
   
    assert.equal(translator.americanTranslate(input), 'Like a high tech <span class="highlight">Heath Robinson device</span>.' );
    done();
  });

/*test7*/
     test("Translate To play hooky means to skip class or work. to British English", function(done) {
    var input = "To play hooky means to skip class or work."
   
    assert.equal(translator.americanTranslate(input), 'To <span class="highlight">bunk off</span> means to skip class or work.' );
    done();
  });

/*test8*/
    test("Translate No Mr. Bond, I expect you to die. to British English", function(done) {
    var input = "No Mr. Bond, I expect you to die."
   
    assert.equal(translator.americanTranslate(input), 'No <span class="highlight">Mr</span> Bond, I expect you to die.' );
    done();
  });
/*test9*/
  test("Translate Dr. Grosh will see you now. to British English", function(done) {
    var input = "Dr. Grosh will see you now."
   
    assert.equal(translator.americanTranslate(input), '<span class="highlight">Dr</span> Grosh will see you now.' );
    done();
  });
/*test10*/
    test("Translate Lunch is at 12:15 today. to British English", function(done) {
    var input = "Lunch is at 12:15 today."
   
    assert.equal(translator.americanTranslate(input), 'Lunch is at <span class="highlight">12.15</span> today.' );
    done();
  });

/*test11*/
    test("Translate We watched the footie match for a while. to American English", function(done) {
    var input = "We watched the footie match for a while."
   
    assert.equal(translator.britishTranslate(input), 'We watched the <span class="highlight">soccer</span> match for a while.' );
    done();
  });
/*test12*/
  test("Translate Paracetamol takes up to an hour to work. to American English", function(done) {
    var input = "Paracetamol takes up to an hour to work."
   
    assert.equal(translator.britishTranslate(input), '<span class="highlight">Tylenol</span> takes up to an hour to work.' );
    done();
  });
  /*test13*/
   test("Translate First, caramelise the onions. to American English", function(done) {
    var input = "First, caramelise the onions."
   
    assert.equal(translator.britishTranslate(input), 'First, <span class="highlight">caramelize</span> the onions.' );
    done();
  });
  /*test14*/
   test("Translate I spent the bank holiday at the funfair. to American English", function(done) {
    var input = "I spent the bank holiday at the funfair."
   
    assert.equal(translator.britishTranslate(input), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    done();
  });

/*test15*/
  test("Translate I had a bicky then went to the chippy. to American English", function(done) {
    var input = "I had a bicky then went to the chippy."
   
    assert.equal(translator.britishTranslate(input), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.' );
    done();
  });
/*test16*/
 test("Translate I've just got bits and bobs in my bum bag. to American English", function(done) {
    var input = "I've just got bits and bobs in my bum bag."
   
    assert.equal(translator.britishTranslate(input), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.' );
    done();
  });
/*test17*/
 test("Translate The car boot sale at Boxted Airfield was called off. to American English", function(done) {
    var input = "The car boot sale at Boxted Airfield was called off."
   
    assert.equal(translator.britishTranslate(input), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.' );
    done();
  });
/*test18*/
 test("Translate Have you met Mrs Kalyani? to American English", function(done) {
    var input = "Have you met Mrs Kalyani?"
   
    assert.equal(translator.britishTranslate(input), 'Have you met <span class="highlight">Mrs.</span> Kalyani?' );
    done();
  });
/*test19*/
 test("Translate Prof Joyner of King's College, London. to American English", function(done) {
    var input = "Prof Joyner of King's College, London."
   
    assert.equal(translator.britishTranslate(input), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.' );
    done();
  });
/*test20*/
test("Translate Tea time is usually around 4 or 4.30. to American English", function(done) {
    var input = "Tea time is usually around 4 or 4.30."
   
    assert.equal(translator.britishTranslate(input), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.' );
    done();
  });
  /*test21*/
 test('Highlight translation in Mangoes are my favorite fruit.', function(done) {
    var input = 'Mangoes are my favorite fruit.'
   
    assert.equal(translator.americanTranslate(input), 'Mangoes are my <span class="highlight">favourite</span> fruit.' );
    done();
  });

  /*test22*/
  test('Highlight translation in I ate yogurt for breakfast.', function(done) {
    var input = 'I ate yogurt for breakfast.'
   
    assert.equal(translator.americanTranslate(input), 'I ate <span class="highlight">yoghurt</span> for breakfast.' );
    done();
  }); 
/*test23*/
    test("Highlight translation in We watched the footie match for a while.", function(done) {
    var input = "We watched the footie match for a while."
   
    assert.equal(translator.britishTranslate(input), 'We watched the <span class="highlight">soccer</span> match for a while.' );
    done();
  });
/*test24*/
  test("Highlight translation in Paracetamol takes up to an hour to work.", function(done) {
    var input = "Paracetamol takes up to an hour to work."
   
    assert.equal(translator.britishTranslate(input), '<span class="highlight">Tylenol</span> takes up to an hour to work.' );
    done();
  });
  
  

});
