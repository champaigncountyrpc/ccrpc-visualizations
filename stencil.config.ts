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
  globalStyle: 'src/global/rpcviz.css'
};
