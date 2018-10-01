import * as d3Fetch from "d3-fetch";


export interface DataOptions {
  switch?: boolean;
  rows?: string;
  columns?: string;
}

function _filter(i: number, values: number[]) {
  let pos = (values[0] > 0);
  let sign = (pos) ? 1 : -1;
  let match = (values.indexOf((i+1)*sign) === -1);
  return (pos) ? match : !match;
};

function _toNumericArray(values: string) {
  return (values) ? values.split(',').map(parseInt) : [];
}

export async function getData(source: string | HTMLElement,
    options: DataOptions = {}) : Promise<string[][]> {
  let data;

  if (typeof source === 'string') {
    let res = await d3Fetch.csv(source);
    data = res.map((row) => res.columns.map((col) => row[col]));
    data.unshift(res.columns);
  } else {
    data = Array.from(source.querySelectorAll('tr')).map((tr) => {
      return Array.from(tr.querySelectorAll('td,th'))
        .map((td) => td.textContent)
    });
  }

  // Transpose rows and columns if necessary.
  if (options.switch)
    data = data[0].map((_col, i) => data.map((row) => row[i]));

  // Filter rows and columns.
  let rows = _toNumericArray(options.rows);
  let cols = _toNumericArray(options.columns);

  if (rows.length) data = data.filter((_row, r) => _filter(r, rows));
  if (cols.length) data = data.map(
    (row) => row.filter((_col, c) => _filter(c, cols)));

  return data;
}

export function getOptions(obj: any, attrNames: string[]) {
  let options = {
    title: obj.chartTitle
  };
  for (let name of attrNames)
    if (obj[name] !== undefined) options[name] = obj[name];
  return options;
}
