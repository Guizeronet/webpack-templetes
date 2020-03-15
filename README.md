Simple Webpack structure template and configuration with secure hosted files.
It's only a tool for development! Never use for production.

- Why?

I always find myself having trouble using some browser APIs due to the need for a secure connection (like webcam, microphone, voice to text, etc).
I could pass a flag to my browser and this would be enabled, but it would leave me further than the user experiences.
That is why I chose to develop in an https environment to have a closer view of the user and also already prepare my application for the development environment, leaving me free from the tricks of the transition from an unsafe environment to safe.

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

Generate a self-signed certificate into folder 'certificate', open the terminal and type:

* openssl req -nodes -new -x509 -keyout server.key -out server.cert
(hit enter for every question in terminal)

Install node dependencies:
* npm install

- Use

Development: execute to watch modifications in files and generate the outputs quickly skping the unglyfy process. And executes a https server on localhost.

* npm run build:watch

Production: generates all files with all otimizations.

* npm run build:prod


