Simple Webpack configuration file.

- Functions
	* Generate a JS bundles;

- Structure

index.html		[start html file]
webpack.config.js	[configurations for webpack]
/dist			[output folder to generated files]
/src			[source folder (js, css, png, html)]
/package.json		[configurations for npm]

- Setup

* npm install

- Use

Development: execute to watch modifications in files and generate files quickly
skping the unglyfy process.
* npm run build:watch

Production: generates all files with all otimizations.
* npm run build:prod
