module.exports = {
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'bower_components/webcomponentsjs/webcomponents-lite.min.js',
    'src/*.html',
    'src/behaviors/*.html',
    'pages/*.html',
    'images/**.*'

  ],
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /^https:\/\/api\.shuvayatra\.org\/v1\/api/,
    handler: 'fastest'
  }, {
    urlPattern: /^https:\/\/fonts\.googleapis\.com\/css/,
    handler: 'fastest'
  }, {
    urlPattern: /^https:\/\/api\.shuvayatra\.org\/v1\/uploads/,
    handler: 'fastest'
  }, {
    urlPattern: /\.(jpg|jpeg|gif|png|css|js|ico|xml|rss|txt|mp3|svg)$/i,
    handler: 'fastest',
  }]
};
