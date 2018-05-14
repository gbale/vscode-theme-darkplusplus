/* An exceptionally useful block comment */
// Another useful line comment
var foo = require('foo');
function func(param) {
    var text = 'string';
    for (var i = 0; i < param.length; i++) {
        text += i;
    }
    return {
        "text": text,
        "boolean": false
    };
}
