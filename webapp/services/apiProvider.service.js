/**
 * BBVA GCP Team < gcp.team@bbva.com >
 * Date: 4/02/16
 * Time: 12:13
 */

import angular from "angular";

import restProvider from "./rest.service.js";

class ApiProvider {

	constructor( $log, $q, restClient ) {

		this.$log = $log;
		this.$q = $q;
		this.restClient = restClient;
	}

	getNear(lng, lat, distance, url) {

		let vm = this;
		let deferred = vm.$q.defer();

		vm.restClient.doGet("/s/near?distance=" + distance + "&lng=" + lng + "&lat=" + lat + "&url=" + url)
			.then(
				function ( resp ) {

					vm.$log.info( resp, "getNear" );
					deferred.resolve( resp );
				},
				function ( err ) {

					vm.$log.error( err, "getNear" );
					deferred.reject( err );
				}
			);

		return deferred.promise;
	}
}

ApiProvider.$inject = [ "$log", "$q", "restClient" ];

export default angular.module( "services.apiInfo", [ restProvider ] )
	.service( "apiProvider", ApiProvider )
	.name;