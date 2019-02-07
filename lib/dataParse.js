import Papa from 'papaparse';

export const parser = Papa.parse("https://raw.githubusercontent.com/hsteg/TurnStyle/master/data/turnstile_190126.txt", 
{
  delimiter: "",	// auto-detect
	newline: "",	// auto-detect
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
	complete: function(results) {
    const filtered = {};
    for (let i = 1; i < results.data.length; i++) {
      let stationKey = results.data[i][1];
      let turnstileKey = results.data[i][2];
      let dateKey = results.data[i][6];

      if(!(stationKey in filtered)) { filtered[stationKey] = {};}
      if(!(turnstileKey in filtered[stationKey])) { filtered[stationKey][turnstileKey] = {};}
      if(!(dateKey in filtered[stationKey][turnstileKey])) { filtered[stationKey][turnstileKey][dateKey] = [];}
      
      // filtered[key][`${results.data[i][6]} - ${results.data[i][7]} - ${results.data[i][2]}`] = [results.data[i][3], results.data[i][9], results.data[i][10]];
      filtered[stationKey][turnstileKey][dateKey].push([results.data[i][7], results.data[i][3], results.data[i][9], results.data[i][10]]);
    }
    console.log(filtered);
  },
	error: undefined,
	download: true,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined,
	delimitersToGuess: [',', '\t', '\n', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
});

// "C/A,UNIT,SCP,STATION,LINENAME,DIVISION,DATE,TIME,DESC,ENTRIES,EXITS\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,03:00:00,REGULAR,0003362309,0006035143\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,07:00:00,REGULAR,0003362327,0006035190\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,11:00:00,REGULAR,0003362445,0006035456\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,15:00:00,REGULAR,0003362644,0006035822"