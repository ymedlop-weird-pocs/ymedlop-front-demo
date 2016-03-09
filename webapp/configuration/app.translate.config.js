let translations = ( $translateProvider ) => {

	const enGB = require( "./../assets/lang/en-GB.json" );
	const enUS = require( "./../assets/lang/en-US.json" );
	const esES = require( "./../assets/lang/es-ES.json" );
	const ptPT = require( "./../assets/lang/pt-PT.json" );

	$translateProvider.useSanitizeValueStrategy( "sanitizeParameters" );

	$translateProvider
		.translations( "en-GB", enGB )
		.translations( "en-US", enUS )
		.translations( "es-ES", esES )
		.translations( "pt-PT", ptPT )
		.preferredLanguage( "es-ES" );
};

translations.$inject = [ "$translateProvider" ];

export default translations;