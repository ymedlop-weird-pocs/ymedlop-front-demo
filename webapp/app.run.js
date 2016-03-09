/*eslint angular/window-service:0*/
/*eslint no-undef:0*/

import appValues from "./configuration/app.values.js";

import angular from "angular";

let setApp = ( $route, appData ) => {
	/*
	 URL: https://github.com/angular/angular.js/issues/1213
	 FIX: Initial route update doesn't happen if ngView in a template loaded by ngInclude
	 */

	$route.reload();
};

setApp.$inject = [ "$route", "appData" ];

let setLanguage = ( $translate, amMoment, appData ) => {

	$translate.use( appData.locale.lang );
	amMoment.changeLocale( appData.locale.moment );

	function setLang( params ) {
		switch ( (params.lang ? params.lang : params.language) ) {
			case "en_US":
				appData.locale.lang = "en-US";
				appData.locale.moment = "en-us";
				break;
			case "en_GB":
				appData.locale.lang = "en-GB";
				appData.locale.moment = "en-gb";
				break;
			case "es_ES":
				appData.locale.lang = "es-ES";
				appData.locale.moment = "es";
				break;
			case "pt_PT":
				appData.locale.lang = "pt-PT";
				appData.locale.moment = "pt";
				break;
		}

		$translate.use( appData.locale.lang );
		amMoment.changeLocale( appData.locale.moment );
	}
};

setLanguage.$inject = [ "$translate", "amMoment", "appData" ];

angular
	.module( appValues.appName )
	.run( setApp )
	.run( setLanguage )
;
