/*eslint angular/module-getter:0*/
/*eslint no-unused-vars:0*/

import angular from "angular";
import _ from "lodash";

// Import CSS
import "./styles/index.scss";

import "./app.module";
import "./app.run";

import appValues from "./configuration/app.values.js";

import appRoutes from "./configuration/app.routes.config.js";
import appTranslations from "./configuration/app.translate.config.js";

import "./components/globalLoading.constants";
import "./components/globalLoading.directive";

import "./components/language.constants";
import "./components/language.directive";

import "./features/home/home.controller";
import "./features/topNavbar/topnav.controller";

angular.module( appValues.appName )
	.config( appRoutes )
	.config( appTranslations );


