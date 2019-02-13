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
    if (!(dateKey in filtered[stationKey])) { filtered[stationKey][dateKey] = []; }
  }

  for (let i = 1; i < results.data.length; i++) {
    let stationKey = results.data[i][1];
    let turnstileKey = results.data[i][2];
    let dateKey = results.data[i][6];
    let timeKey = results.data[i][7];
    let entries = results.data[i][9];
    let exits = results.data[i][10];
    let stationName = results.data[i][3];


    filtered[stationKey][dateKey].push([dateKey, timeKey, stationName, turnstileKey, entries, exits, stationKey]);
  }

  const codeDateTime = {};

  for (let i = 1; i < results.data.length; i++) {
    let stationKey = results.data[i][1];
    let dateKey = results.data[i][6];

    if (typeof stationKey === 'undefined') { continue; }

    if (!(stationKey in codeDateTime)) { codeDateTime[stationKey] = {}; }
    if (!(dateKey in codeDateTime[stationKey])) { codeDateTime[stationKey][dateKey] = {}; }

    if (dateKey === "01/19/2019") {
      codeDateTime[stationKey][dateKey][2] = [];
      codeDateTime[stationKey][dateKey][3] = [];
      codeDateTime[stationKey][dateKey][4] = [];
      codeDateTime[stationKey][dateKey][5] = [];
      codeDateTime[stationKey][dateKey][6] = [];
    } else {
      codeDateTime[stationKey][dateKey][1] = [];
      codeDateTime[stationKey][dateKey][2] = [];
      codeDateTime[stationKey][dateKey][3] = [];
      codeDateTime[stationKey][dateKey][4] = [];
      codeDateTime[stationKey][dateKey][5] = [];
      codeDateTime[stationKey][dateKey][6] = [];
    }
  }

  for (let i = 1; i < results.data.length; i++) {

    let stationKey = results.data[i][1];
    let turnstileKey = results.data[i][2];
    let dateKey = results.data[i][6];
    let timeKey = results.data[i][7];
    let entries = results.data[i][9];
    let exits = results.data[i][10];
    let stationName = results.data[i][3];
    let dataTimeKey = results.data[i][7];

    if (typeof timeKey === 'undefined' || typeof dateKey === 'undefined') { continue; }

    let newDayKey = (parseInt(dateKey.slice(3, 5)) + 1).toString();
    let newDateKey = `01/${newDayKey}/2019`;



    if (dateKey === '01/19/2019') {
      switch (timeKey.slice(0, 2)) {
        case "03":
        case "04":
        case "05":
        case "06":
          codeDateTime[stationKey][dateKey][2].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "07":
        case "08":
        case "09":
        case "10":
          codeDateTime[stationKey][dateKey][3].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "11":
        case "12":
        case "13":
        case "14":
          codeDateTime[stationKey][dateKey][4].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "15":
        case "16":
        case "17":
        case "18":
          codeDateTime[stationKey][dateKey][5].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "19":
        case "20":
        case "21":
        case "22":
          codeDateTime[stationKey][dateKey][6].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "23":
          codeDateTime[stationKey][newDateKey][1].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        default:
          break;
      }
    } else if (dateKey !== '01/25/2019' && dateKey !== '01/19/2019') {
      switch (timeKey.slice(0, 2)) {
        case "23":
          codeDateTime[stationKey][newDateKey]["1"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "00":
        case "01":
        case "02":
          codeDateTime[stationKey][dateKey]["1"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "03":
        case "04":
        case "05":
        case "06":
          codeDateTime[stationKey][dateKey]["2"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "07":
        case "08":
        case "09":
        case "10":
          codeDateTime[stationKey][dateKey]["3"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "11":
        case "12":
        case "13":
        case "14":
          codeDateTime[stationKey][dateKey]["4"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "15":
        case "16":
        case "17":
        case "18":
          codeDateTime[stationKey][dateKey]["5"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "19":
        case "20":
        case "21":
        case "22":
          codeDateTime[stationKey][dateKey]["6"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
      }
    } else if (dateKey === '01/25/2019') {
      switch (timeKey.slice(0, 2)) {
        case "23":
          break;
        case "00":
        case "01":
        case "02":
          codeDateTime[stationKey][dateKey]["1"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "03":
        case "04":
        case "05":
        case "06":
          codeDateTime[stationKey][dateKey]["2"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "07":
        case "08":
        case "09":
        case "10":
          codeDateTime[stationKey][dateKey]["3"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "11":
        case "12":
        case "13":
        case "14":
          codeDateTime[stationKey][dateKey]["4"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "15":
        case "16":
        case "17":
        case "18":
          codeDateTime[stationKey][dateKey]["5"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
        case "19":
        case "20":
        case "21":
        case "22":
          codeDateTime[stationKey][dateKey]["6"].push([dateKey, dataTimeKey, stationName, turnstileKey, entries, exits, stationKey]);
          break;
      }
    }
  }

  let stationKeys = Object.keys(codeDateTime);

  for (let i = 0; i < stationKeys.length; i++) {
    let dateKeys = Object.keys(codeDateTime[stationKeys[i]]);
    let stationTotals = [];
    
    for (let j = 0; j < dateKeys.length; j++) {
      let chunkKeys = Object.keys(codeDateTime[stationKeys[i]][dateKeys[j]]);

      for (let k = 0; k < chunkKeys.length; k++) {
        let entries = 0;
        let exits = 0;
        let date;
        let time;
        let stationName;
        let stationCode;
        codeDateTime[stationKeys[i]][dateKeys[j]][chunkKeys[k]].forEach(turnstile => {
          entries += turnstile[4];
          exits += turnstile[5];
          date = turnstile[0];
          time = turnstile[1];
          stationName = turnstile[2];
          stationCode = turnstile[6];
        });
        stationTotals.push([stationCode, stationName, date, time, entries, exits]);
      }
    }
    codeDateTime[stationKeys[i]] = stationTotals;
  }

  for (let i = 0; i < stationKeys.length; i++) {
    let stationDifferences = [];
    for (let j = 0; j < codeDateTime[stationKeys[i]].length - 1; j++) {
      let stationCode = codeDateTime[stationKeys[i]][j][0];
      let stationName = codeDateTime[stationKeys[i]][j][1];
      let date = `${codeDateTime[stationKeys[i]][j][2]}-${codeDateTime[stationKeys[i]][j+1][2]}`;
      let time = `${codeDateTime[stationKeys[i]][j][3]}-${codeDateTime[stationKeys[i]][j+1][3]}`;
      let entriesDifference = codeDateTime[stationKeys[i]][j+1][4] - codeDateTime[stationKeys[i]][j][4];
      let exitsDifference = codeDateTime[stationKeys[i]][j+1][5] - codeDateTime[stationKeys[i]][j][5]

      stationDifferences.push([stationCode, stationName, date, time, entriesDifference, exitsDifference]);
    }
    codeDateTime[stationKeys[i]]=stationDifferences;
  }
  // for (let i = 0; i < stationKeys.length; i++) {
  //   let dateKeys = Object.keys(codeDateTime[stationKeys[i]]);
  //   let stationDifferences = [];
  //   for (let j = 0; j < dateKeys.length; j++) {
  //     let chunkKeys = Object.keys(codeDateTime[stationKeys[i]][dateKeys[j]]);

  //     for (let k = 0; k < chunkKeys.length; k++) {
  //       // 4 is entries, 5 is exits
  //       let entries = 0;
  //       let exits = 0;
  //       let date;
  //       let time;
  //       let stationName;
  //       let stationCode;
  //       codeDateTime[stationKeys[i]][dateKeys[j]][chunkKeys[k]].forEach(turnstile => {
  //         entries += turnstile[4];
  //         exits += turnstile[5];
  //         date = turnstile[0];
  //         time = turnstile[1];
  //         stationName = turnstile[2];
  //         stationCode = turnstile[6];
  //       });
  //       stationDifferences.push([stationCode, stationName, date, time, entries, exits]);
  //     }
  //   }
  // }


  // let stationKeys = Object.keys(filtered);
  // let dateTimeTurnstiles = stationKeys.map(stationKey => {
  //   return Object.values(filtered[stationKey]);
  // });

  // let formattedData = [];

  // for (let i = 0; i < dateTimeTurnstiles.length; i++) {
  //   let newStationData = [];
  //   for (let j = 0; j < dateTimeTurnstiles[i].length; j++) {
  //     let entries = 0;
  //     let exits = 0;
  //     let stationName = "";
  //     let stationKey = "";
  //     for (let k = 0; k < dateTimeTurnstiles[i][j].length; k++) {
  //       entries += dateTimeTurnstiles[i][j][k][4];
  //       exits += dateTimeTurnstiles[i][j][k][5];
  //       stationName = dateTimeTurnstiles[i][j][k][2];
  //       stationKey = dateTimeTurnstiles[i][j][k][6];
  //     }
  //     newStationData.push([stationKey, stationName, entries, exits]);
  //   }
  //   formattedData.push(newStationData);
  // }

  // let formattedDifferences = [];

  // for (let i = 0; i < formattedData.length; i++) {
  //   let differences = [];
  //   for (let j = 0; j < formattedData[i].length - 1; j++) {
  //     let entriesDifference = formattedData[i][j+1][2] - formattedData[i][j][2];
  //     let exitsDifference = formattedData[i][j+1][3] - formattedData[i][j][3];
  //     let stationCode = formattedData[i][j][0];
  //     let stationName = formattedData[i][j][1];
  //     let differenceRow = [stationCode, stationName, entriesDifference, exitsDifference];
  //     differences.push(differenceRow);
  //   }
  //   formattedDifferences.push(differences);
  // }

  // let jsonFormattedDifferences = {};

  // for (let i = 0; i < formattedDifferences.length - 1; i++) {
  //   let stationCode = formattedDifferences[i][0][0];
  //   jsonFormattedDifferences[stationCode] = formattedDifferences[i];
  // }





  console.log("done");
  // window.formattedData = formattedData;
  window.data = filtered;
  window.codeDateTime = codeDateTime;
  finalResults = codeDateTime;
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



// const handleResults = (results) => {
//   let finalResults;
//   const filtered = {};
//   for (let i = 1; i < results.data.length; i++) {
//     let stationKey = results.data[i][1];
//     let dateKey = results.data[i][6];
//     let timeKey = results.data[i][7];
//     let dateTimeKey = `${dateKey}-${timeKey}`;

//     if (!(stationKey in filtered)) { filtered[stationKey] = {}; }
//     if (!(dateKey in filtered[stationKey])) { filtered[stationKey][dateTimeKey] = []; }
//   }

//   for (let i = 1; i < results.data.length; i++) {
//     let stationKey = results.data[i][1];
//     let turnstileKey = results.data[i][2];
//     let dateKey = results.data[i][6];
//     let timeKey = results.data[i][7];
//     let entries = results.data[i][9];
//     let exits = results.data[i][10];
//     let stationName = results.data[i][3];

//     let dateTimeKey = `${dateKey}-${timeKey}`;

//     filtered[stationKey][dateTimeKey].push([dateKey, timeKey, stationName, turnstileKey, entries, exits, stationKey]);
//   }

//   let stationKeys = Object.keys(filtered);
//   let dateTimeTurnstiles = stationKeys.map(stationKey => {
//     return Object.values(filtered[stationKey]);
//   });

//   let formattedData = [];

//   for (let i = 0; i < dateTimeTurnstiles.length; i++) {
//     let newStationData = [];
//     for (let j = 0; j < dateTimeTurnstiles[i].length; j++) {
//       let entries = 0;
//       let exits = 0;
//       let stationName = "";
//       let stationKey = "";
//       for (let k = 0; k < dateTimeTurnstiles[i][j].length; k++) {
//         entries += dateTimeTurnstiles[i][j][k][4];
//         exits += dateTimeTurnstiles[i][j][k][5];
//         stationName = dateTimeTurnstiles[i][j][k][2];
//         stationKey = dateTimeTurnstiles[i][j][k][6];
//       }
//       newStationData.push([stationKey, stationName, entries, exits]);
//     }
//     formattedData.push(newStationData);
//   }

//   let formattedDifferences = [];

//   for (let i = 0; i < formattedData.length; i++) {
//     let differences = [];
//     for (let j = 0; j < formattedData[i].length - 1; j++) {
//       let entriesDifference = formattedData[i][j+1][2] - formattedData[i][j][2];
//       let exitsDifference = formattedData[i][j+1][3] - formattedData[i][j][3];
//       let stationCode = formattedData[i][j][0];
//       let stationName = formattedData[i][j][1];
//       let differenceRow = [stationCode, stationName, entriesDifference, exitsDifference];
//       differences.push(differenceRow);
//     }
//     formattedDifferences.push(differences);
//   }

//   let jsonFormattedDifferences = {};

//   for (let i = 0; i < formattedDifferences.length - 1; i++) {
//     let stationCode = formattedDifferences[i][0][0];
//     jsonFormattedDifferences[stationCode] = formattedDifferences[i];
//   }





//   console.log("done");
//   window.formattedData = formattedData;
//   window.data = filtered;
//   window.dateTimeTurnstiles = dateTimeTurnstiles;
//   window.formattedDifferences = formattedDifferences;
//   window.jsonDiff = jsonFormattedDifferences;
//   finalResults = jsonFormattedDifferences;
//   return finalResults;
// }

