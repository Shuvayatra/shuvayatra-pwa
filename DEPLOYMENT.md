#How To Deploy The Shuvayatra Web App

### Requirements
1. Install Polymer CLI with `npm install -g polymer-cli`
2. NGINX 1.9.5+ installed with http2 support with config on `/etc/nginx/site-available/shuvayatra.org`


### How To
1. Change working directory to `/var/www/webappp` where Shuvayatra web app source code deployed 
2. Pull the repo from Github `git pull https://github.com/Shuvayatra/shuvayatra-pwa.git`
3. Build the code with Polymer CLI `polymer build`. You can check  how the build process works from [this page](https://www.polymer-project.org/2.0/toolbox/build-for-production) 
4. Check the build result on build directory. Based on NGINX config, we're using `build/es5-bundled` which deliver es5 compatible scripts that works on Google Bot and most browsers.