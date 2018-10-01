import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'rpcviz',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  copy: [
    {
      src: 'data'
    }
  ],
  globalStyle: 'src/global/rpcviz.css'
};
