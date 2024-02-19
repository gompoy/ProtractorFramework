let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){
    
    it('addition test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('5');

        homepage.clickGo();

        homepage.verifyResult('9');

        browser.sleep(2000)

    });

    it('subtraction test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('9');
        
        homepage.enterSecondNumber('5');
        
        homepage.enterOperator('-');
        
        homepage.clickGo1();

        homepage.verifyResult('4');

        browser.sleep(2000)

    });

    it('multiplication test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('9');
        
        homepage.enterSecondNumber('5');
        
        homepage.enterOperator('*');
        
        homepage.clickGo();

        homepage.verifyResult('45');

        browser.sleep(2000)

    });

    it('division test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('45');
        
        homepage.enterSecondNumber('5');
        
        homepage.enterOperator('/');
        
        homepage.clickGo();

        homepage.verifyResult('9');

        browser.sleep(2000)

    });
});