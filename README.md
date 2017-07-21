# Shuvayatra Progressive Web App

This web app is build with Polymer with hybrid elements that support of Polymer 1 and 2 elements. Some of the elements already ported to Polymer 2 but some of it still in Polymer 1. 

### Start the development server

Follow the steps below to start with your own development server
1. Clone the repo from https://github.com/Shuvayatra/shuvayatra-pwa 
2. Run `bower install` to install all dependend packages
3. Start the development server with `polymer serve --open`


### Deployment
Follow the deployment guide [here](https://github.com/Shuvayatra/shuvayatra-pwa/blob/master/DEPLOYMENT.md)

### Adding new page 
To add new page on this PWA you can create a custom element under `src/` directory and add your page by edit the page routes in `src/shuvayatra-app.html` to link with the router. All new page must be in format `shuvayatra-*.html`. It must have shuvayatra prefix on custom element ID and filename.

