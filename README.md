Simple Webpack structure template and configuration.

- Functions
	* Generate a JS bundles;
		- optmized
	* Generates CSS thought SASS or SCSS;
		- packed with bundle.js file

- Structure

	- index.html		[start html file]
	- webpack.config.js	[configurations for webpack]
	- /dist			[output folder to generated files]
	- /src			[source folder (js, scss)]
	- /package.json		[configurations for npm]

- Setup

	* npm install

- Use

Development: execute to watch modifications in files and generate the outputs quickly skping the unglyfy process.

* npm run build:watch

Production: generates all files with all otimizations.

* npm run build:prod


