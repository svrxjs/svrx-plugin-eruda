const libPath = require('path');
const libFs = require('fs');

function isHtml(url) {
  return /\.(html|htm)($|\?)/.test(url);
}

function appendScript(body, scriptUrl, configSchemaStr) {
  const replaceScript = [`</body>`, `<script src="${scriptUrl}"></script><script>eruda.init(${configSchemaStr});</script></body>`];
  return body.replace(...replaceScript);
}

function getConfigSchemaStr(config) {
  const configSchema = {};
  const container = config.get('container');
  const tool = config.get('tool');
  const autoScale = config.get('autoScale');
  const useShadowDom = config.get('useShadowDom');
  if (container !== undefined) configSchema.container = container;
  if (tool !== undefined) configSchema.tool = tool;
  if (autoScale !== undefined) configSchema.autoScale = autoScale;
  if (useShadowDom !== undefined) configSchema.useShadowDom = useShadowDom;

  return JSON.stringify(configSchema);
}

module.exports = {
  configSchema: {
    version: {
      type: 'string',
      default: '1.5.5'
    },
    container: {
      type: 'string'
    },
    tool: {
      oneOf: [
        {
          type: 'array'
        },
        {
          type: 'string'
        }
      ]
    },
    autoScale: {
      type: 'boolean'
    },
    useShadowDom: {
      type: 'boolean'
    }
  },
  hooks: {
    async onRoute(ctx, next, { config }) {
      if (isHtml(ctx.path)) {
        const rootPath = config.get('$.root');
        const version = config.get('version');
        const filePath = libPath.join(rootPath, ctx.path);
        const fileContent = libFs.readFileSync(filePath, 'utf8');
        const scriptUrl = `//cdnjs.cloudflare.com/ajax/libs/eruda/${version}/eruda.min.js`;

        ctx.body = appendScript(fileContent, scriptUrl, getConfigSchemaStr(config));
      }

      await next();
    }
  }
};