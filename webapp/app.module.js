import angular from "angular";
import "angular-moment";
import ngRoute from "angular-route";
import ngElastic from "angular-elastic";
import uiBootstrap from "angular-ui-bootstrap";
import ngSanitize from "angular-sanitize";
import "angular-translate";
import "angular-route-segment";
import ngAnimate from "angular-animate";
import toastr from "angular-toastr";

import apiProvider from "./services/apiProvider.service";

import appValues from "./configuration/app.values.js";

angular.module( appValues.appName, [
		ngAnimate,
		"angularMoment",
		ngRoute,
		"route-segment",
		"view-segment",
		uiBootstrap,
		ngElastic,
		ngSanitize,
		"pascalprecht.translate",
		apiProvider,
		toastr
	] )
	.value( "appData", appValues.appData );


