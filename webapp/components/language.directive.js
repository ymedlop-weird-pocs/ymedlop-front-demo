/*eslint angular/module-getter:0*/

import angular from "angular";

import appValues from "../configuration/app.values.js";

import template from "./language.html";

class LanguageSelectorController {

    constructor( $translate, languages, amMoment, appData ) {

        this.$translate = $translate;

        this.languages = languages;

        this.amMoment = amMoment;

        this.appData = appData;

    }

    changeLang( pLanguage ) {

        let vm = this;

        vm.appData.locale.lang = pLanguage.replace( "LANGUAGES.", "" );

        switch ( vm.appData.locale.lang ) {
            case "en-US":
                vm.appData.locale.moment = "en-us";
                break;
            case "en-GB":
                vm.appData.locale.moment = "en-gb";
                break;
            case "es-ES":
                vm.appData.locale.moment = "es";
                break;
            case "pt-PT":
                vm.appData.locale.moment = "pt";
                break;
        }

        vm.$translate.use( vm.appData.locale.lang );
        vm.amMoment.changeLocale( vm.appData.locale.moment );
        vm.amMoment.getLocale
    }

    getSelected() {

        let vm = this;

        return vm.languages[ vm.appData.locale.lang ];
    }

}

LanguageSelectorController.$inject = [ "$translate", "languages", "amMoment", "appData" ];

function languageSelector( $log ) {
    return {
        restrict : "EA",
        templateUrl : template,
        link : ( scope, el, attr, ctrl ) => {
            $log.info( "LINK: scope", scope );
        },
        controller : LanguageSelectorController,
        controllerAs : "languageSelectorCtrl",
        bindToController : true
    };
}

languageSelector.$inject = [ "$log" ];

angular
    .module( appValues.appName )
    .directive( "languageSelector", languageSelector );