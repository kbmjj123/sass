require(['gitbook'], function(gitbook) {
  var loadScript = function loadScript(url) {
    var script = document.createElement('script')
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
  }

  gitbook.events.bind('start', function(e, config) {
    var pluginConfig = config.codepen

    if (pluginConfig) {
      var url = 'https://static.codepen.io/assets/embed/ei.js'
      loadScript(url)
    }
  })
})
