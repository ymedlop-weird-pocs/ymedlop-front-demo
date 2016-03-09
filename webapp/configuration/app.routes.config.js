import homeRoute from "../features/home/home.routes";
import navBarRoute from "../features/topNavbar/topnav.routes";

let routing = ( $routeSegmentProvider, $routeProvider, $locationProvider ) => {

	// Add here your Angular Routes

	$routeSegmentProvider
		.when( "/", "navbar.home" )
	;

	$routeSegmentProvider
		.segment( "navbar", navBarRoute );

	$routeSegmentProvider
		.within( "navbar" )
		.segment( "home", homeRoute );
};

routing.$inject = [ "$routeSegmentProvider", "$routeProvider", "$locationProvider" ];

export default routing;