import Papa from 'papaparse';

const handleResults = (results) => {
  let finalResults;
  const filtered = {};
  for (let i = 1; i < results.data.length; i++) {
    let stationKey = results.data[i][1];
    let dateKey = results.data[i][6];
    let timeKey = results.data[i][7];
    let dateTimeKey = `${dateKey}-${timeKey}`;

    if (!(stationKey in filtered)) { filtered[stationKey] = {}; }
    if (!(dateKey in filtered[stationKey])) { filtered[stationKey][dateTimeKey] = []; }
  }

  for (let i = 1; i < results.data.length; i++) {
    let stationKey = results.data[i][1];
    let turnstileKey = results.data[i][2];
    let dateKey = results.data[i][6];
    let timeKey = results.data[i][7];
    let entries = results.data[i][9];
    let exits = results.data[i][10];
    let stationName = results.data[i][3];

    let dateTimeKey = `${dateKey}-${timeKey}`;
    
    filtered[stationKey][dateTimeKey].push([dateKey, timeKey, stationName, turnstileKey, entries, exits, stationKey]);
  }

  let stationKeys = Object.keys(filtered);
  let dateTimeTurnstiles = stationKeys.map(stationKey => {
    return Object.values(filtered[stationKey]);
  });

  let formattedData = [];
  
  for (let i = 0; i < dateTimeTurnstiles.length; i++) {
    let newStationData = [];
    for (let j = 0; j < dateTimeTurnstiles[i].length; j++) {
      let entries = 0;
      let exits = 0;
      let stationName = "";
      let stationKey = "";
      for (let k = 0; k < dateTimeTurnstiles[i][j].length; k++) {
        entries += dateTimeTurnstiles[i][j][k][4];
        exits += dateTimeTurnstiles[i][j][k][5];
        stationName = dateTimeTurnstiles[i][j][k][2];
        stationKey = dateTimeTurnstiles[i][j][k][6];
      }
      newStationData.push([stationKey, stationName, entries, exits]);
    }
    formattedData.push(newStationData);
  }

  let formattedDifferences = [];

  for (let i = 0; i < formattedData.length; i++) {
    let differences = [];
    for (let j = 0; j < formattedData[i].length - 1; j++) {
      let entriesDifference = formattedData[i][j+1][2] - formattedData[i][j][2];
      let exitsDifference = formattedData[i][j+1][3] - formattedData[i][j][3];
      let stationCode = formattedData[i][j][0];
      let stationName = formattedData[i][j][1];
      let differenceRow = [stationCode, stationName, entriesDifference, exitsDifference];
      differences.push(differenceRow);
    }
    formattedDifferences.push(differences);
  }

  let jsonFormattedDifferences = {};

  for (let i = 0; i < formattedDifferences.length - 1; i++) {
    let stationCode = formattedDifferences[i][0][0];
    jsonFormattedDifferences[stationCode] = formattedDifferences[i];
  }





  console.log("done");
  window.formattedData = formattedData;
  window.data = filtered;
  window.dateTimeTurnstiles = dateTimeTurnstiles;
  window.formattedDifferences = formattedDifferences;
  window.jsonDiff = jsonFormattedDifferences;
  finalResults = jsonFormattedDifferences;
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





