Simple Webpack structure template and configuration with secure hosted files.
It's only a tool for development! Never use for production.

- Why?

I always find myself having trouble using some browser APIs due to the need for a secure connection (like webcam, microphone, voice to text, etc).
I could pass a flag to my browser and this would be enabled, but it would leave me further than the user experiences.
That is why I chose to develop in an https environment to have a closer view of the user and also already prepare my application for the development environment, leaving me free from the tricks of the transition from an unsafe environment to safe.

- Functions
	* Host files under HTTPS for development;
		- unsecure https, only for development
	* Generate a JS bundles;
		- optmized
	* Generates CSS thought SASS or SCSS;
		- in separated file and directory
	* Structured
		- improved file structure

- Structure

	- server.js		[express https server executable]
	- webpack.config.js	[configurations for webpack]
	- /certificate		[certificates folder]
	- /src			[source folder (js, scss)]
		- /js		[js files]
		- sass		[sass or scss files]
	- /pages		[folder to host html files]
		- index.html	[Application entry point. The server will redirect to this file when the root is acessed]
	- /public		[folder to host public files like images, css, js and others]
		- /css		[webpack generated css files]
		- /img		[images files used in project]
		- /js		[webpack generated js files]
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

- Project Structure

This project is organized in branches, each branch solver a problem in a certain level of complexity. When you need a template only clone the branch with your needs.

* master
	- Basic webpack, only generates js and css in a single file;
	- With a low complexity in file structure.
* https-server
	- Generates each type of file in diferents folders;
	- File structure improved;
	- Host files under https;
	- Able uses web browser APIs like webcan and voice recognition in the easyest way.
