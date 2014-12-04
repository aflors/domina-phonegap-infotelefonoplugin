var exec = require('cordova/exec');

console.info('Registrando plugin InfoTelefono.');	

var instancia = {
	InfoTelefonoPlugin : function(successCallback,failureCallback) {
	 exec(successCallback, failureCallback, 
	      'infotelefonoplugin', 'ACCION_OBTENER_TELEFONO', []);
		
	}
}

module.exports = instancia;

