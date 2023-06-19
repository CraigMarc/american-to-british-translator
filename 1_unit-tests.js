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

  
  

});
