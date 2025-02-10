function initTemplate(config, pluginConfig) {
  var _config = Object.assign({}, pluginConfig, config)
  var template =
    '<p class="codepen" data-height="<%=height%>" data-theme-id="<%=theme%>" data-default-tab="<%=defaultTab%>" data-user="<%=user%>" data-slug-hash="<%=slugHash%>" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="<%=title%>">\n      <span>See the Pen <a href="https://codepen.io/<%=user%>/pen/<%=slugHash%>/">\n      <%=title%></a> by halapro.liu (<a href="https://codepen.io/<%=user%>">@<%=user%></a>)\n      on <a href="https://codepen.io">CodePen</a>.</span>\n    </p>'
  var reg
  Object.keys(_config).forEach(function(key) {
    reg = new RegExp('<%='.concat(key, '%>'), 'g')
    template = template.replace(reg, _config[key])
  })
  return template
}

function getConfig(item) {
  var config = {}
  var str = item.slice(13, -1)
  var tmp = str.split('?')
  var pathArr = tmp[0].split('/')
  var paramArr = tmp[1].split('&')
  var user = pathArr[0]
  var slugHash = pathArr[1]
  config.user = user
  config.slugHash = slugHash
  paramArr.forEach(function(param) {
    var paramTmp = param.split('=')
    config[paramTmp[0]] = paramTmp[1]
  })
  return config
}
module.exports = {
  book: {
    assets: './assets',
    js: ['plugin.js']
  },
  hooks: {
    'page:before': function(page) {
      var pluginsConfig = this.config.get('pluginsConfig.codepen')
      var reg = /\[\]\(codepen:\/\/.*\)/g
      var codepenArrs = page.content.match(reg) || []
      if (codepenArrs.length) {
        var config = {}
        codepenArrs.forEach(function(item) {
          config = getConfig(item) || {}
          var template = initTemplate(config, pluginsConfig)
          page.content = page.content.replace(item, template)
        })
      }
      return page
    }
  }
}
