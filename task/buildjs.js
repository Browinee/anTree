
var sysBuilder = require('systemjs-builder');
var builder = new sysBuilder('','../systemjs.config.js');
  return builder
         .buildStatic('../app/main.js','../build/bundle.min.js',{ minify:true, sourceMaps: true,encodeNames: false })
         .then(function() {
            console.log('Build complete');
           
        })
         
        .catch(function(err) {
            console.log('Build bundle error');
            console.log(err);
        });