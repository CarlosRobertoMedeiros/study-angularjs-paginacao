(function(){
	'use strict';

	angular.module('app').service('listarDadosService',['$http',listarDadosService]);

	function listarDadosService($http){

		const dc = this;
		dc.classBody;

		dc.listarDados = function(){

			return $http.get("../../dados/dados.json");

		}
	}

})();