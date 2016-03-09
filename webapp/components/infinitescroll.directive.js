/*eslint angular/module-getter:0*/

import angular from "angular";
import _ from "lodash";

import appValues from "../configuration/app.values.js";

class InfiniteScrollController {

	constructor( $log ) {

		$log.info( "InfiniteScroll Controller" );
    }
}

InfiniteScrollController.$inject = [ "$log" ];

function infiniteScroll( $log ) {

	return {
		restrict : "EA",
		link : ( scope, el, attr, ctrl ) => {
			var raw = el[ 0 ];
			el.bind( "scroll", _.debounce( function () {
				if ( raw.scrollTop + raw.offsetHeight >= raw.scrollHeight ) {
					$log.info( "Doing infinitive scroll!!" );
					scope.$apply( attr.whenScrolled );
				}
			}, 150 ) );
		},
		controller : InfiniteScrollController,
		controllerAs : "InfiniteScrollCtrl"
	}
}

infiniteScroll.$inject = [ "$log" ];

angular
	.module( appValues.appName )
	.directive( "infiniteScroll", infiniteScroll );