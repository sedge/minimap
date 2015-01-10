var m = require('../m');
var expect = require('chai').expect;

describe('minimap', function() {

  it('replaces tokens in a string once', function() {
    var template = '{token1} {token2}';
    var res = m.map({
      'token1': 'hello',
      'token2': 'world'
    }, template);
    expect(res).to.equal('hello world');
  });

  it('replaces tokens multiple times', function() {
    var template = '{token1} {token1}';
    var res = m.map({
      'token1': 'hello'
    }, template);
    expect(res).to.equal('hello hello');
  });

  it('remembers replacements to always replace', function() {
    m.always({
      'token1': 'hello'
    });
    var template = '{token1} {token2}';
    var res = m.map({
      'token2': 'world'
    }, template);
    expect(res).to.equal('hello world');
  });

  it('remembers replacements to never replace', function() {
    m.never('token1');
    var template = '{token1} {token2}';
    var res = m.map({
      'token1': 'hello',
      'token2': 'world'
    }, template);
    expect(res).to.equal('{token1} world');
  });

  it('is totally awesome', function() {
    expect(true).to.be.true;
  });
});
