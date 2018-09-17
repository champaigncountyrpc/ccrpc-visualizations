/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';


import {
  Alignment,
  AxisTypeOption,
} from '@ccrpc/charts';


export namespace Components {

  interface RpcvizBarChart {
    'chartTitle': string;
    'columns': string;
    'gridLines': boolean;
    'height': string;
    'legend': boolean;
    'legendAlignment': Alignment;
    'legendRowWidth': number;
    'redrawRate': number;
    'rows': string;
    'stacked': boolean;
    'switch': boolean;
    'url': string;
    'width': string;
    'xAngle': number;
    'xLabel': string;
    'xType': AxisTypeOption;
    'yAngle': number;
    'yLabel': string;
  }
  interface RpcvizBarChartAttributes extends StencilHTMLAttributes {
    'chartTitle'?: string;
    'columns'?: string;
    'gridLines'?: boolean;
    'height'?: string;
    'legend'?: boolean;
    'legendAlignment'?: Alignment;
    'legendRowWidth'?: number;
    'redrawRate'?: number;
    'rows'?: string;
    'stacked'?: boolean;
    'switch'?: boolean;
    'url'?: string;
    'width'?: string;
    'xAngle'?: number;
    'xLabel'?: string;
    'xType'?: AxisTypeOption;
    'yAngle'?: number;
    'yLabel'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'RpcvizBarChart': Components.RpcvizBarChart;
  }

  interface StencilIntrinsicElements {
    'rpcviz-bar-chart': Components.RpcvizBarChartAttributes;
  }


  interface HTMLRpcvizBarChartElement extends Components.RpcvizBarChart, HTMLStencilElement {}
  var HTMLRpcvizBarChartElement: {
    prototype: HTMLRpcvizBarChartElement;
    new (): HTMLRpcvizBarChartElement;
  };

  interface HTMLElementTagNameMap {
    'rpcviz-bar-chart': HTMLRpcvizBarChartElement
  }

  interface ElementTagNameMap {
    'rpcviz-bar-chart': HTMLRpcvizBarChartElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}