/*eslint angular/module-getter:0*/
/*eslint no-unused-vars:0*/

import appValues from "../../configuration/app.values.js";
import angular from "angular";
import _ from "lodash";

class HomeController {

	constructor( $window, $location, $translate, $log, apiProvider ) {

		let vm = this;

		vm.$location = $location;
		vm.$log = $log;
		vm.$translate = $translate;
		vm.$window = $window;

		vm.apiProvider = apiProvider;
		vm.items = [];

		vm.lng = 33.453145;
		vm.lat = -3.7035555000000002;
		vm.radius = 100;
		vm.url = "http://ymedlop-db-memory-rest-bbva-sandbox.openshift-app-os1.lospaaseros.com";
	}

	get() {

		let vm = this;

		vm.apiProvider.getNear(vm.lng, vm.lat, vm.radius, vm.url)
			.then(
				( data )=> {
					vm.items = data.list;
				},
			( err )=> {

			}
		)
	}
}

HomeController.$inject = [ "$window", "$location", "$translate", "$log", "apiProvider"];

angular
	.module( appValues.appName )
	.controller( "HomeController", HomeController )
;