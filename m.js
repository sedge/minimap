var alwaysReplace = {};
var neverReplace = [];

exports.map = function(tokens, str) {
  str = replaceTokens(alwaysReplace, str);
  str = replaceTokens(tokens, str);
  return str;
}

exports.always = function(tokens) {
  for (var key in tokens) {
    alwaysReplace[key] = tokens[key];
  }
}

exports.never = function(key) {
  neverReplace.push(key);
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function replaceTokens(tokens, str) {
  for (key in tokens) {
    if (neverReplace.indexOf(key) == -1) {
      str = replaceAll('{' + key + '}', tokens[key], str);
    }
  }
  return str;
}
