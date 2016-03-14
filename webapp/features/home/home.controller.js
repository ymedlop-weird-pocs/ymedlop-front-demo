/*eslint angular/module-getter:0*/
/*eslint no-unused-vars:0*/

import appValues from "../../configuration/app.values.js";
import angular from "angular";
import _ from "lodash";

class HomeController {

	constructor( $window, $location, $translate, $log, apiProvider, GoogleMapApi ) {

		let vm = this;

		vm.$location = $location;
		vm.$log = $log;
		vm.$translate = $translate;
		vm.$window = $window;

		vm.apiProvider = apiProvider;
		vm.items = [];

		vm.longitude = -3.712191999999959;
		vm.latitude = 40.4777782;
		vm.distance = 100;
		vm.url = "http://172.17.0.1:5000";

		vm.map = {
			control: {},
			center: {
				latitude: 40.475129700000004,
				longitude: -3.5788542999999997,
				zoom: 8
			},
			options: {
				streetViewControl: false,
				panControl: false,
				maxZoom: 20,
				minZoom: 3
			},
			zoom: 8,
			dragging: false,
			bounds: {}
		};

		GoogleMapApi.then(function(maps) {

			maps.visualRefresh = true;

		});
	}

	get() {

		let vm = this;

		vm.apiProvider.getNear(vm.longitude, vm.latitude, vm.distance, vm.url)
			.then(
				( data )=> {
					vm.items = data.list;
				},
			( err )=> {

			}
		)
	}
}

HomeController.$inject = [ "$window", "$location", "$translate", "$log", "apiProvider", "uiGmapGoogleMapApi"];

angular
	.module( appValues.appName )
	.controller( "HomeController", HomeController )
;