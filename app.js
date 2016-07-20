(function () {

	var app = angular.module('MonsterBan', []);

	app.controller('AppController', [appController]);

	function appController() {

		var ac = this;

		ac.showRegister = true;

	}


})();