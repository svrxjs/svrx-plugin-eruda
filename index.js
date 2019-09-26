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
    container: {
      type: 'string',
    },
    tool: {
      oneOf: [
        {
          type: 'array',
        },
        {
          type: 'string',
        },
      ],
    },
    autoScale: {
      type: 'boolean',
    },
    useShadowDom: {
      type: 'boolean',
    },
  },
  assets: {
    script: [
      './assets/eruda.js',
      (config) => `eruda.init(${getConfigSchemaStr(config)});`,
    ],
  },
};
