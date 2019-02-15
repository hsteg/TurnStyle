/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/turnStyle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dataParse.js":
/*!**************************!*\
  !*** ./lib/dataParse.js ***!
  \**************************/
/*! exports provided: makeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRequest", function() { return makeRequest; });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);


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
  delimitersToGuess: [',', '\t', '\n', ';', papaparse__WEBPACK_IMPORTED_MODULE_0___default.a.RECORD_SEP, papaparse__WEBPACK_IMPORTED_MODULE_0___default.a.UNIT_SEP]
};

papaparse__WEBPACK_IMPORTED_MODULE_0___default.a.parsePromise = function (file, optionsHash) {
  return new Promise(function (complete, error) {
    papaparse__WEBPACK_IMPORTED_MODULE_0___default.a.parse(file, Object.assign({ complete, error }, optionsHash));
  });
};

const makeRequest = async () => {
  const results = await papaparse__WEBPACK_IMPORTED_MODULE_0___default.a.parsePromise("https://raw.githubusercontent.com/hsteg/TurnStyle/master/data/turnstile_190126.txt", optionsHash)
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



/***/ }),

/***/ "./lib/map_data_overlay.js":
/*!*********************************!*\
  !*** ./lib/map_data_overlay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MapDataOverlay {
  constructor() {

  }

  addNewCircles(data) {
    let flatData = [];
    let stationKeys = Object.keys(data);

    for (let i = 0; i < 40; i++) {
      let stationChunks = [];
      for (let j = 0; j < stationKeys.length; j++) {
        // checking below here to make sure I have full data, currently disreagarding any non full data sets, approx 6/450 stations meet this criteria
        if (data[stationKeys[j]].length !== 40) { continue; }
        stationChunks.push({ stationCode: stationKeys[j], stationName: data[stationKeys[j]][i][1], date: data[stationKeys[j]][i][2], time: data[stationKeys[j]][i][3], diff: data[stationKeys[j]][i][4] - data[stationKeys[j]][i][5] });
      }
      flatData.push(stationChunks);
    }

    console.log(flatData);

    let stationLayer = d3.select(".stations");

    // const dataDisplay = document.querySelector("#data")
    let i = 0;
    // let newestData = flatData[i];
    
    let interval = setInterval(() => {
      let newestData = flatData[i];
      
      for (let k = 0; k < newestData.length; k++) {
        let marker = stationLayer.select(`#${newestData[k].stationCode}`);
        let numCircles = this.numCirclesToGenerate(newestData[k].diff);

        for (let j = 0; j < numCircles; j++) {
          newestData[k].diff >= 0 ? this.generateEntrance(marker) : this.generateExit(marker);
        }
      }
      // dataDisplay.innerHTML = i;
      if (i === 39) { clearInterval(interval); }
      i++;
    }, 2300);

  }

  generateExit(marker) {
    marker.append("circle")
      .attr("id", "circ")
      .attr("cx", 50)
      .attr("cy", 50)
      .style('fill', 'transparent')
      .transition().duration(Math.random() * 1000)
      .attr("r", 2 + "px")
      .transition().on("end", function () {
        d3.select(this)
          .style('fill', 'red')
          .transition().duration(1000)
          .attr("cx", Math.random() * 200)
          .attr("cy", Math.random() * 200)
          .style("opacity", .6)
          .on("end", function () {
            d3.select(this).remove();
          });
      });
  }

  generateEntrance(marker) {
    this.chooseWall(marker);
  }

  chooseWall(marker) {
    let startWallNum = Math.floor(Math.random() * 3);

    switch (startWallNum) {
      case 0:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", Math.floor(Math.random() * 97))
          .attr("cy", 2)
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 2 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });

      case 1:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", 97)
          .attr("cy", Math.floor(Math.random() * 97))
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 2 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });

      case 2:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", 3)
          .attr("cy", Math.floor(Math.random() * 97))
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 2 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });

      case 3:
        return marker.append("circle")
          .attr("id", "circ")
          .attr("cx", Math.floor(Math.random() * 97))
          .attr("cy", 97)
          .style('fill', 'transparent')
          .transition().duration(Math.random() * 1000)
          .attr("r", 2 + "px")
          .transition().on("end", function () {
            entranceTransition(this)
          });
    }

    function entranceTransition(svg) {
      d3.select(svg)
        .style('fill', 'green')
        .transition().duration(1000)
        .attr("cx", 50)
        .attr("cy", 50)
        .style("opacity", .6)
        .on("end", function () {
          d3.select(svg).remove();
        });
    }
  }

  numCirclesToGenerate(difference) {
    let nonNegDifference = difference < 0 ? difference * -1 : difference;
    if (nonNegDifference > 15000) { return 3; }
    let numCircles = nonNegDifference / 500;
    return numCircles;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapDataOverlay);



/***/ }),

/***/ "./lib/turnStyle.js":
/*!**************************!*\
  !*** ./lib/turnStyle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataParse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataParse */ "./lib/dataParse.js");
/* harmony import */ var _map_data_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_data_overlay */ "./lib/map_data_overlay.js");
/* harmony import */ var _ui_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_controls */ "./lib/ui_controls.js");





class TurnStyle {
  constructor() {
    this.data = [];
  }

  loadData() {
    Object(_dataParse__WEBPACK_IMPORTED_MODULE_0__["makeRequest"])().then(data => this.handleData(data));
  }

  handleData(data) {
    this.data = data;
    this.removeLoading();
    this.addPlayControls();
    window.turnData = this.data;
  }

  removeLoading() {
    const loadingText = document.getElementById('loading');
    loadingText.style.display = 'none';
  }

  addPlayControls() {
    const mapOverlay = new _map_data_overlay__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const uIControls = new _ui_controls__WEBPACK_IMPORTED_MODULE_2__["default"]();
    uIControls.initPlayControls();
    const playControlsDiv = document.getElementById('play-controls');
    const controlBar = document.createElement('button');
    controlBar.innerHTML = 'clickme';
    controlBar.onclick = () => {mapOverlay.addNewCircles(this.data)};
    playControlsDiv.appendChild(controlBar);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  const turnStyle = new TurnStyle();
  turnStyle.loadData();
})






/***/ }),

/***/ "./lib/ui_controls.js":
/*!****************************!*\
  !*** ./lib/ui_controls.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_data_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map_data_overlay */ "./lib/map_data_overlay.js");


class UIControls {
  constructor() {
    this.mapDataOverlay = new _map_data_overlay__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  initPlayControls() {

    d3.select('#ui-controls').append("svg").attr("id", "svg-container")

    let whiteBox = d3.select("#svg-container")
      .attr("width", '100%')
      // .attr("height", '100%')
      .style('background-color', '#f2e9d4');

    whiteBox.append('line')
      .style("stroke-width", 10)
      .style("stroke", "#1ba057")
      .attr("x1", 510)
      .attr("y1", 0)
      .transition().duration(2000)
      .attr("x2", 510)
      .attr("y2", 1000);

    // whiteBox.append('path')
    // .style("stroke", "#1ba057")
    // .style("fill", "transparent")
    // .style("stroke-width", 10)
    // .attr("d", "M 540 0 C 540 95 500 35 500 500 C 545 745 525 810 530 1000");

    whiteBox.append('line')
      .style("stroke", "#ec3243")
      .style("stroke-width", 10)
      .attr("x1", 200)
      .attr("y1", 0)
      .attr("x2", 200)
      .transition().duration(2000)
      .attr("y2", 1000);

    whiteBox.append('path')
      .style("stroke-width", 10)
      .style("fill", "transparent")
      .style("stroke", "transparent")
      .transition().duration(2000)
      .style("stroke", "#0d68b6")
      .attr("d", "M 75 0 L 75 500 C 75 600 320 520 340 630 L 340 1000");

    // whiteBox.append('path')
    //   .style("stroke", "#f38022")
    //   .style("stroke-width", 10)
    //   .style("fill", "transparent")
    //   .attr("d", "M 350 0 L 350 640 Q 350 680 775 680");


    whiteBox.append('line')
      .style("stroke", "#f38022")
      .style("stroke-width", 10)
      .attr("x1", 350)
      .attr("y1", 0)
      .attr("x2", 350)
      .transition().duration(2000)
      .attr("y2", 1000);



    whiteBox.append('path')
      .style("fill", "transparent")
      .style("stroke-width", 10)
      .style("stroke", "transparent")
      .transition().duration(2000)
      .style("stroke", "#fed623")
      .attr("d", "M 210 0 C 210 140 500 310 490 500 L 490 1000");

    whiteBox.append('line')
      .style("stroke", "#939598")
      .style("stroke-width", 10)
      .attr("x1", 0)
      .attr("y1", 500)
      .attr("x2", 1000)
      .attr("y2", 500);

    //herald sq circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 350)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 225)
      .attr("class", "ui-circle");

  //herald sq circle 8th 14th circle
    whiteBox.append("svg").append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 500)
      .attr("class", "ui-circle");

    whiteBox.append("a")
      .attr("xlink:href", "http://dev.harrisonsteg.com")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 100)
      .attr("class", "ui-circle");

    whiteBox.append("a")
      .attr("xlink:href", "http://linkedin.com/in/hsteg")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 225)
      .attr("class", "ui-circle");

    whiteBox.append("a")
      .attr("xlink:href", "http://github.com/hsteg")
      .append("svg")
      .append('circle')
      .attr("cx", 75)
      .attr("r", 12)
      .transition().duration(2000)
      .attr("cy", 350)
      .attr("class", "ui-circle");

    whiteBox.append("a")
      .attr("xlink:href", "http://dev.harrisonsteg.com")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 106)
      .text("Contact");

    whiteBox.append("a")
      .attr("xlink:href", "http://linkedin.com/in/hsteg")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 231)
      .text("LinkedIn");

    whiteBox.append("a")
      .attr("xlink:href", "http://github.com/hsteg")
      .append("text")
      .attr("class", "ui-link")
      .attr("x", 90)
      .transition().duration(2000)
      .attr("y", 356)
      .text("GitHub");


    whiteBox.append("svg").append('button').text("asdfasdf").attr('height', 400).attr('width', 40);





  }
}

/* harmony default export */ __webpack_exports__["default"] = (UIControls);

/***/ }),

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v4.6.3
https://github.com/mholt/PapaParse
License: MIT
*/
Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var s,e,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},n=!f.document&&!!f.postMessage,o=n&&/(\?|&)papaworker(=|&|$)/.test(f.location.search),a=!1,h={},u=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;z(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return!1;if(!a&&null===k.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=k.SCRIPT_PATH||s;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var t=new f.Worker(e);return t.onmessage=m,t.id=u++,h[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;k.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new c(t):new _(t):!0===e.readable&&z(e.read)&&z(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new p(t));return n.stream(e)},unparse:function(e,t){var i=!1,g=!0,m=",",y="\r\n",n='"',r=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(g=t.header)}();var s=new RegExp(M(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return o(null,e,r);if("object"==typeof e[0])return o(a(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:a(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),o(e.fields||[],e.data||[],r);throw"exception: Unable to serialize unrecognized input";function a(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function o(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=m);var _=n&&s?e[p]:p;i+=v(t[o][_],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(s,n+n);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(m)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.SCRIPT_PATH=null,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=v,k.ParserHandle=r,k.NetworkStreamer=c,k.FileStreamer=p,k.StringStreamer=_,k.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(z(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(z(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){z(a)&&a(e,n.file,n.inputElem),u()},k.parse(n.file,n.instanceConfig)}else z(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(z(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return;n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!z(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(e){z(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1})}}function c(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r),i.setRequestHeader("If-None-Match","webkit-no-cache")}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function p(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),l.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function _(e){var r;l.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function g(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,s=0,u=!1,e=!1,f=[],d={data:[],errors:[],meta:{}};if(z(g.step)){var l=g.step;g.step=function(e){if(d=e,p())c();else{if(c(),0===d.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():l(d,t)}}}function m(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(d&&h&&(y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<d.data.length;e++)m(d.data[e])&&d.data.splice(e--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++){var r=d.data[e][t];g.trimHeaders&&(r=r.trim()),f.push(r)}d.data.splice(0,1)}(),function(){if(!d||!g.header&&!g.dynamicTyping&&!g.transform)return d;for(var e=0;e<d.data.length;e++){var t,r=g.header?{}:[];for(t=0;t<d.data[e].length;t++){var i=t,n=d.data[e][t];g.header&&(i=t>=f.length?"__parsed_extra":f[t]),g.transform&&(n=g.transform(n,i)),n=_(i,n),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(n)):r[i]=n}d.data[e]=r,g.header&&(t>f.length?y("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+t,s+e):t<f.length&&y("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+t,s+e))}g.header&&d.meta&&(d.meta.fields=f);return s+=d.data.length,d}()}function p(){return g.header&&0===f.length}function _(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r}function y(e,t,r,i){d.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(M(t)+"([^]*?)"+M(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)z(g.delimiter)&&(g.delimiter=g.delimiter(e),d.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i){for(var n,s,a,o=[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP],h=0;h<o.length;h++){var u=o[h],f=0,d=0,l=0;a=void 0;for(var c=new v({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&m(c.data[p]))l++;else{var _=c.data[p].length;d+=_,void 0!==a?1<_&&(f+=Math.abs(_-a),a=_):a=0}0<c.data.length&&(d/=c.data.length-l),(void 0===s||s<f)&&1.99<d&&(s=f,n=u)}return{successful:!!(g.delimiter=n),bestDelimiter:n}}(e,g.newline,g.skipEmptyLines,g.comments);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=k.DefaultDelimiter),d.meta.delimiter=g.delimiter}var s=E(g);return g.preview&&g.header&&s.preview++,a=e,o=new v(s),d=o.parse(a,t,r),c(),u?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){u=!1,t.streamer.parseChunk(a,!0)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),d.meta.aborted=!0,z(g.complete)&&g.complete(d),a=""}}function M(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(e){var S,O=(e=e||{}).delimiter,x=e.newline,T=e.comments,I=e.step,A=e.preview,D=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<k.BAD_DELIMITERS.indexOf(O))&&(O=","),T===O)throw"Comment character same as delimiter";!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var P=0,F=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw"Input must be a string";var n=i.length,e=O.length,s=x.length,a=T.length,o=z(I),h=[],u=[],f=[],d=P=0;if(!i)return C();if(D||!1!==D&&-1===i.indexOf(S)){for(var l=i.split(x),c=0;c<l.length;c++){if(f=l[c],P+=f.length,c!==l.length-1)P+=x.length;else if(r)return C();if(!T||f.substr(0,a)!==T){if(o){if(h=[],k(f.split(O)),R(),F)return C()}else k(f.split(O));if(A&&A<=c)return h=h.slice(0,A),C(!0)}}return C()}for(var p,_=i.indexOf(O,P),g=i.indexOf(x,P),m=new RegExp(M(L)+M(S),"g");;)if(i[P]!==S)if(T&&0===f.length&&i.substr(P,a)===T){if(-1===g)return C();P=g+s,g=i.indexOf(x,P),_=i.indexOf(O,P)}else if(-1!==_&&(_<g||-1===g))f.push(i.substring(P,_)),P=_+e,_=i.indexOf(O,P);else{if(-1===g)break;if(f.push(i.substring(P,g)),w(g+s),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0)}else for(p=P,P++;;){if(-1===(p=i.indexOf(S,p+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:P}),E();if(p===n-1)return E(i.substring(P,p).replace(m,S));if(S!==L||i[p+1]!==L){if(S===L||0===p||i[p-1]!==L){var y=b(-1===g?_:Math.min(_,g));if(i[p+1+y]===O){f.push(i.substring(P,p).replace(m,S)),P=p+1+y+e,_=i.indexOf(O,P),g=i.indexOf(x,P);break}var v=b(g);if(i.substr(p+1+v,s)===x){if(f.push(i.substring(P,p).replace(m,S)),w(p+1+v+s),_=i.indexOf(O,P),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:P}),p++}}else p++}return E();function k(e){h.push(e),d=P}function b(e){var t=0;if(-1!==e){var r=i.substring(p+1,e);r&&""===r.trim()&&(t=r.length)}return t}function E(e){return r||(void 0===e&&(e=i.substr(P)),f.push(e),P=n,k(f),o&&R()),C()}function w(e){P=e,k(f),f=[],g=i.indexOf(x,P)}function C(e){return{data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:F,truncated:!!e,cursor:d+(t||0)}}}function R(){I(C()),h=[],u=[]}},this.abort=function(){F=!0},this.getCharIndex=function(){return P}}function m(e){var t=e.data,r=h[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(z(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else z(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&y(t.workerId,t.results)}function y(e,t){var r=h[e];z(r.userComplete)&&r.userComplete(t),r.terminate(),delete h[e]}function b(){throw"Not implemented."}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=E(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments)}}function z(e){return"function"==typeof e}return o?f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0})}}:k.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),s=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0},!0):a=!0),(c.prototype=Object.create(l.prototype)).constructor=c,(p.prototype=Object.create(l.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(g.prototype=Object.create(l.prototype)).constructor=g,k});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map