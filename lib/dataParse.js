import Papa from 'papaparse';

const handleResults = (results) => {
  let finalResults;
  const filtered = {};
  for (let i = 1; i < results.data.length; i++) {
    let stationKey = results.data[i][1];
    let turnstileKey = results.data[i][2];
    let dateKey = results.data[i][6];

    if (!(stationKey in filtered)) { filtered[stationKey] = {}; }
    if (!(turnstileKey in filtered[stationKey])) { filtered[stationKey][turnstileKey] = {}; }
    if (!(dateKey in filtered[stationKey][turnstileKey])) { filtered[stationKey][turnstileKey][dateKey] = []; }

    filtered[stationKey][turnstileKey][dateKey].push([results.data[i][7], results.data[i][3], results.data[i][9], results.data[i][10]]);
  }
  console.log("done");
  window.data = filtered;
  finalResults = filtered;
  return finalResults;
}


const optionsHash = {
  delimiter: "",
  newline: "",
  quoteChar: '"',
  escapeChar: '"',
  header: false,
  transformHeader: undefined,
  dynamicTyping: true,
  preview: 0,
  encoding: "",
  worker: false,
  comments: false,
  step: undefined,
  error: undefined,
  download: true,
  skipEmptyLines: false,
  chunk: undefined,
  fastMode: undefined,
  beforeFirstChunk: undefined,
  withCredentials: undefined,
  transform: undefined,
  delimitersToGuess: [',', '\t', '\n', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
};

Papa.parsePromise = function (file, optionsHash) {
  return new Promise(function (complete, error) {
    Papa.parse(file, Object.assign({ complete, error }, optionsHash));
  });
};

export const makeRequest = async () => {
  const results = await Papa.parsePromise("https://raw.githubusercontent.com/hsteg/TurnStyle/master/data/turnstile_190126.txt", optionsHash)
  return handleResults(results);
}





