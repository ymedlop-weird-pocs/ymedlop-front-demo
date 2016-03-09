/*eslint angular/module-getter:0*/

import angular from "angular";
import appValues from "../configuration/app.values.js";

let
    languages = {
        "en-GB" : "LANGUAGES.en-GB",
        "en-US" : "LANGUAGES.en-US",
        "es-ES" : "LANGUAGES.es-ES",
        "pt-PT" : "LANGUAGES.pt-PT"
    }
    ;


angular
    .module( appValues.appName )
    .constant( "languages", languages )
;