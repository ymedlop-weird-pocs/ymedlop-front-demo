import angular from "angular";

/**
 * An angular REST client.
 * Requests to /.* are redirected to /s/.*
 */
class RestClient {
	constructor( $q, $http ) {

		this.$q = $q;

		this.$http = $http;
	}

	doGet( url, headers = null ) {

		return this.doCall( "GET", url, null, headers );
	}

	doPost( url, headers = null, parameters = null ) {

		return this.doCall( "POST", url, parameters, headers );
	}

	doPut( url, headers = null, parameters = null ) {

		return this.doCall( "PUT", url, parameters, headers );
	}

	doDelete( url, headers = null, parameters = null ) {

		return this.doCall( "DELETE", url, parameters, headers );
	}

	doCall( method, url, parameters, headers ) {

		let deferred = this.$q.defer();

		switch ( method ) {
			case "GET":
				this.$http.get( url, headers )
					.then( ( data ) => {

						if ( data.status === 200 ) {

							deferred.resolve( data.data )
						} else {

							deferred.reject( data.statusText );
						}

					}, ( err ) => {

						deferred.reject( err )

					} );
				break;
			case "POST":
				this.$http.post( url, parameters, headers )
					.then( ( data ) => {

						if ( data.status === 200 ) {

							deferred.resolve( data.data )
						} else {

							deferred.reject( data.statusText );
						}

					}, ( err ) => {

						deferred.reject( err )

					} );
				break;
			case "DELETE":
				this.$http.delete( url, headers )
					.then( ( data ) => {

						if ( data.status === 200 ) {

							deferred.resolve( data.data )
						} else {

							deferred.reject( data.statusText );
						}

					}, ( err ) => {

						deferred.reject( err )

					} );
				break;
			case "PUT":
				this.$http.put( url, parameters, headers )
					.then( ( data ) => {

						if ( data.status === 200 ) {

							deferred.resolve( data.data )
						} else {

							deferred.reject( data.statusText );
						}

					}, ( err ) => {

						deferred.reject( err )

					} );
				break;
			default:
				deferred.reject( new Error( "No method provided" ) );
				break;
		}

		return deferred.promise;
	}
}

RestClient.$inject = [ "$q", "$http" ];

export default angular.module( "services.restClient", [] )
	.service( "restClient", RestClient )
	.name;