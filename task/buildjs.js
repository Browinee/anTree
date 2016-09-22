
var sysBuilder = require('systemjs-builder');
var builder = new sysBuilder('../antree','systemjs.config.js');
  return builder
         .buildStatic('app/main.js','build/bundle.min.js',{minify:false,  sourceMaps: true,encodeNames: false })
         .then(function() {
            console.log('Build complete');
           
        })
         
        .catch(function(err) {
            console.log('Build bundle error');
            console.log(err);
        });