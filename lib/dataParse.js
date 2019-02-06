import Papa from 'papaparse';

export const parser = Papa.parse("C/A,UNIT,SCP,STATION,LINENAME,DIVISION,DATE,TIME,DESC,ENTRIES,EXITS\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,03:00:00,REGULAR,0003362309,0006035143\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,07:00:00,REGULAR,0003362327,0006035190\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,11:00:00,REGULAR,0003362445,0006035456\nN405,R239,00-00-00,GREENPOINT AV,G,IND,01/19/2019,15:00:00,REGULAR,0003362644,0006035822", 
{
  delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: true,
	transformHeader: undefined,
	dynamicTyping: true,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined,
	delimitersToGuess: [',', '\t', '\n', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
});