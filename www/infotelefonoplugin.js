cordova.define("com.javiermoreno.phonegap.infotelefonoplugin", function(require, exports, module) {

// https://github.com/apache/cordova-js/tree/master/src
var exec = require('cordova/exec'),
    InfoTelefono = require('./InfoTelefono');

    console.debug('Registrando plugin InfoTelefono.');	
    var InfoTelefonoPlugin = function() {
    }
	
    InfoTelefonoPlugin.prototype.obtenerInfo = function(successCallback,failureCallback) {
         exec(successCallback, failureCallback, 
              'InfoTelefonoPlugin', 'ACCION_OBTENER_TELEFONO', []);
		
    }
	
    var instancia = new InfoTelefonoPlugin();
    console.log('Objeto exportado: ', instancia);
    
    module.exports = instancia;
});
