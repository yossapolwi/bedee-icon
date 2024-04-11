module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    { name: 'preset-default' },
    'sortAttrs',
    'removeScriptElement',
    'removeDimensions',
    'removeScriptElement',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['stroke', 'path:stroke-width'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            'stroke-width': '1.5',
            stroke: 'currentColor',
            'aria-hidden': 'true',
            'data-slot': 'icon',
          },
        ],
      },
    },
  ],
}