/*eslint angular/module-getter:0*/

import angular from "angular";
import _ from "lodash";

import template from "./globalLoading.html";
import appValues from "../configuration/app.values.js";

class GlobalLoadingController {

	constructor( $http, globalServicesUrl ) {

		this.$http = $http;

		this.globalServicesUrl = globalServicesUrl;
	}

	isLoading() {

		let vm = this;

		var size = _.size(
			_.filter( vm.$http.pendingRequests, function ( request ) {
				return _.find( vm.globalServicesUrl, function ( excludeUrl ) {
					return request.url.indexOf( excludeUrl ) !== -1;
				} );
			} )
		);
		return vm.$http.pendingRequests.length > 0 && size > 0;
	}
}

GlobalLoadingController.$inject = [ "$http", "globalServicesUrl" ];

function globalLoading( $log ) {

	return {
		restrict : "EA",
		templateUrl : template,
		link : function linkFunc( scope, el, attr, ctrl ) {

			$log.info( "LINK: scope", scope );
		},
		controller : GlobalLoadingController,
		controllerAs : "globalLoadingCtrl",
		bindToController : true
	};
}

globalLoading.$inject = [ "$log" ];

angular
	.module( appValues.appName )
	.directive( "globalLoading", globalLoading );