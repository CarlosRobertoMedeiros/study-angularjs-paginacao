(function(){
	'use strict';
	angular.module('app').controller('listarDadosCtrl',['$http','listarDadosService',listarDadosCtrl]);

	function listarDadosCtrl($http,listarDadosService){
		const dc = this;
		dc.dados = [];
		dc.sortKey = "";
		dc.reverse = false;
		
		dc.titulo = "Exemplo de Aplicabilidade de Paginação";

		dc.init = function(){
			this.listarDados();
		};

		dc.listarDados = function(){
			
			listarDadosService.listarDados()
				.then(function(response){
					dc.dados = [];
					dc.dados = response.data;
				}),function(error){
					if (error.data){
						console.log("Deu erro "+ error);
					}
				};
		}

		dc.ordenar = function(chave){
			dc.sortKey = chave
			dc.reverse = !dc.reverse;
		}

	}

})();