/*eslint angular/module-getter:0*/

import angular from "angular";
import appValues from "../configuration/app.values.js";

let globalServicesUrl = [
	"/s/"
];

angular
	.module( appValues.appName )
	.constant( "globalServicesUrl", globalServicesUrl )
;