var Luhns = require('./luhns-algorithm');
var luhns = new Luhns('7992739871x');

describe('check luhns account number', function() {

  it('compute sum of digits', function() {
    expect(luhns.sum(0)).toEqual(67);
  });

  it('get check digit', function() {
    expect(luhns.checkDigit('7992739871x')).toEqual(3);
  });

  it('validate Visa', function() {
    expect(luhns.validate('4485286850676868')).toEqual(true);
  });

  it('validate AMEX', function() {
    expect(luhns.validate('377495863040587')).toEqual(true);
  });

  it('validate MC', function() {
    expect(luhns.validate('5275189262247602')).toEqual(true);
  });

  it('validate DISCOVER', function() {
    expect(luhns.validate('6011604555006546')).toEqual(true);
  });

  it('invalid card', function() {
    expect(luhns.validate('4485286853676868')).toEqual(false);
  });

   it('invalid card containing letter', function() {
     expect(luhns.validate('448528T853676868')).toThrow
            (new Error('Not a digit'));
   });

  it('invalid card', function() {
    expect(luhns.validate('6111604555006546')).toEqual(false);
  });
});
