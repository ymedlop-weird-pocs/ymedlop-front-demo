/*eslint angular/module-getter:0*/
import angular from "angular";

import appValues from "../../configuration/app.values.js";

class TopNavigationController {

	constructor( $location ) {

		this.$location = $location;
	}

	goToHomePage() {

		this.$location.url( "/" );
	}
}

TopNavigationController.$inject = [ "$location"];

angular
	.module( appValues.appName )
	.controller( "NavigationController", TopNavigationController );