import * as d3Fetch from "d3-fetch";


export function getData(url: string, parent: HTMLElement) :
    Promise<string[][]> {
  if (url) return new Promise((resolve) => {
    d3Fetch.csv(url, ((data) => resolve(data as any) as any));
  });

  return Promise.resolve(
    Array.from(parent.querySelectorAll('tr')).map((tr) => {
      return Array.from(tr.querySelectorAll('td,th'))
        .map((td) => td.textContent)
    })
  );
}


export function getOptions(obj: any, attrNames: string[]) {
  let options = {
    title: obj.chartTitle
  };
  for (let name of attrNames)
    if (obj[name] !== undefined) options[name] = obj[name];
  return options;
}
