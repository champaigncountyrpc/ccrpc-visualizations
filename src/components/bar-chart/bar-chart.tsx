import { Component, Element, Prop } from '@stencil/core';
import { Alignment, AxisTypeOption, BarChart as Chart } from '@ccrpc/charts';
import { getData, getOptions } from '../../utils';


@Component({
  tag: 'rpcviz-bar-chart',
  shadow: false
})
export class BarChart {
  chartEl?: HTMLElement;

  @Element() el: HTMLElement;

  @Prop() height: string = '400px';
  @Prop() width: string = '100%';

  @Prop() url: string;
  @Prop() rows: string;
  @Prop() columns: string;
  @Prop() switch: boolean;

  @Prop() chartTitle: string;
  @Prop() legend: boolean;
  @Prop() legendAlignment: Alignment;
  @Prop() legendRowWidth: number;
  @Prop() redrawRate: number;

  @Prop() gridLines: boolean;
  @Prop() xAngle: number;
  @Prop() xLabel: string;
  @Prop() xType: AxisTypeOption = 'category';
  @Prop() yAngle: number;
  @Prop() yLabel: string;

  @Prop() stacked: boolean;

  async componentDidLoad() {
    let data = await getData(this.url, this.el);
    new Chart(this.chartEl, data, getOptions(this, [
      'legend',
      'legendAlignment',
      'legendRowWidth',
      'redrawRate',
      'gridLines',
      'xAngle',
      'xLabel',
      'xType',
      'yAngle',
      'yLabel',
      'stacked'
    ]));
  }

  render() {
    return ([
      <div class="chart bar-chart" aria-hidden="true"
          style={{height: this.height, width: this.width}}
          ref={(r: HTMLElement) => this.chartEl = r}>
      </div>,
      <div class="data rpcviz-sr-only">
        <slot />
      </div>
    ]);
  }
}
