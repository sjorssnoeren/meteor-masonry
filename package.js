Package.describe({
	name: 'sjors:meteor-masonry',
	summary: 'Plug & play package of Masonry',
	version: '0.0.1',
	git: 'https://github.com/sjorssnoeren/meteor-masonry'
});

Package.onUse(function (api) {
	api.versionsFrom('0.9.0');

	api.use('jquery', 'client');

	api.addFiles('lib/dist/masonry.pkgd.js', 'client');
});