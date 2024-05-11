var areClipPathShapesSupported = function () {

  var base = 'clipPath',
    prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
    properties = [ base ],
    testElement = document.createElement( 'testelement' ),
    attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

  for ( var i = 0, l = prefixes.length; i < l; i++ ) {
    var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
    properties.push( prefixedProperty );
  }

  for ( var i = 0, l = properties.length; i < l; i++ ) {
    var property = properties[i];

    if ( testElement.style[property] === '' ) {

      testElement.style[property] = attribute;
      if ( testElement.style[property] !== '' ) {
        return true;
      }
    }
  }

  return false;
};

if (!areClipPathShapesSupported()) {
  document.body.classList.add('not-clip-path');
}