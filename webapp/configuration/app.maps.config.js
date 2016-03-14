let maps = (GoogleMapApi) => {

	GoogleMapApi.configure({
		key: 'AIzaSyC_w4s82eS54k3MRRnPgPoCnBWEYoyZ0pY',
		v: '3.20',
		libraries: 'weather,geometry,visualization'
	});

};

maps.$inject = [ "uiGmapGoogleMapApiProvider" ];

export default maps;