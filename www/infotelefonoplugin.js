cordova.define("com.javiermoreno.phonegap.infotelefonoplugin", function(require, exports, module) {

// https://github.com/apache/cordova-js/tree/master/src
var exec = require('cordova/exec'),
    InfoTelefono = require('./InfoTelefono');

    console.info('Registrando plugin InfoTelefono.');	

    function InfoTelefonoPlugin(){
    }
	
    InfoTelefonoPlugin.prototype.obtenerInfo = function(successCallback,failureCallback) {
         exec(successCallback, failureCallback, 
              'InfoTelefonoPlugin', 'ACCION_OBTENER_TELEFONO', []);
		
    }
	
    var instancia = new InfoTelefonoPlugin();
    console.info('Objeto exportado: ', instancia);
    
    module.exports = instancia;
});
