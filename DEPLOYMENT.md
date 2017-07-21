# How To Deploy The Shuvayatra Web App

### Requirements
1. Install Polymer CLI with `npm install -g polymer-cli`
2. NGINX 1.9.5+ installed with http2 support with config on `/etc/nginx/site-available/shuvayatra.org`
3. Lets Encrypt to provide SSL. Can be install with `sudo apt-get install letsencrypt`. Then setup the certificates under domain with [letsencrypt command](http://manpages.ubuntu.com/manpages/xenial/man1/letsencrypt.1.html)


### How To Deploy the PWA
1. Change working directory to `/var/www/webappp` where Shuvayatra web app source code deployed 
2. Pull the repo from Github `git pull origin master`
3. Build the code with Polymer CLI `polymer build`. You can check  how the build process works from [this page](https://www.polymer-project.org/2.0/toolbox/build-for-production) 
4. Check the build result on build directory. Based on NGINX config, we're using `build/es5-bundled` which deliver es5 compatible scripts that works on Google Bot and most browsers.

### Search Engine Optimation 
Google crawler already able to crawl single page application (SPA) that render the content on client side not on server side. But to make sure Google able to index the content, we need to do some additional requirements.

1. Generate a sitemap and submit to Google Webmaster Tools. [We have a script that pull all data from API and generate an sitemap.xml and sitemap.xml.gz](https://github.com/Shuvayatra/sitemap-generator) file under https://shuvayatra.org/sitemap.xml
2. Submit the sitemap to [Google Webster Tool](https://www.google.com/webmasters/tools/sitemap-list?siteUrl=https://shuvayatra.org/)
3. Make sure the code [build compiled with es5](https://www.polymer-project.org/2.0/toolbox/build-for-production#compiling) to make sure the web can be read by Google Crawler Bot. You can test the web can be read by Google Crawler Bot using [this fetch as Google tool](https://www.google.com/webmasters/tools/googlebot-fetch).
