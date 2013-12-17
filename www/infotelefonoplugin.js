cordova.define("com.javiermoreno.phonegap.infotelefonoplugin", function(require, exports, module) {

// https://github.com/apache/cordova-js/tree/master/src
var exec = require('cordova/exec'),
    var InfoTelefono = require('./InfoTelefono');

	var InfoTelefonoPlugin = function() {
	}
	
	InfoTelefonoPlugin.prototype.obtenerInfo = function(successCallback,failureCallback) {
		exec(successCallback, failureCallback, 
			 'InfoTelefonoPlugin', 'ACCION_OBTENER_TELEFONO', []);
		
	}
	

	module.exports = new InfoTelefonoPlugin();
});
