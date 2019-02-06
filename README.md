#  TurnStyle

## Functionality & MVP

TurnStyle is a visualizer for the MTA provided station turnstile data. 

Features:

 

 - Loading note and visualization letting the user know a large dataset is being downloaded and parsed for display
 - GoogleMaps map component to allow the user to select what stations they'd like to view data for
 - Slider with play/pause button and speed controls allowing the user to control the rate of data visualization

## Wireframes
This app will be a single screen app.  The left half of the browser window will be the various controls for the map on the right half along with various information about myself and the project itself. 
![wireframe](https://github.com/hsteg/TurnStyle/blob/master/turnstyle.png "Wireframe")

## Architecture & Technologies
This project will be implemented with the following technologies:

 - `NodeJS ` 
 - `GoogleMaps` for displaying the map and associated subway stations
 - `Webpack` for bundling JS files. 
 
 In addition to the entry file, there will be three scripts involved in this project.
 
 - `map.js` which will control the map rendering
 - `mapData.js` which will be in charge of rendering the data on the map
 - `dataParse.js` which will be responsible for parsing the raw data into a more usable format
 

## Implementation Timeline

 - Day 1
	 - Set up all necessary Node modules, including getting Webpack up and running
	 - Write basic skeleton of all three previously mentioned scripts
	 - Get a GoogleMaps object in the browser with MTA stations saved as marks
	 - Basic styling to have that previously mentioned GoogleMaps object on the right half of the page and my basic info on the left side of the page
 - Day 2
	 - Dedicate the first half of this day to effectively parsing the raw data into a usable format.
	 - Begin learning how to visually represent this data on the map in a visually appealing way
 - Day 3
	 - Continue learning how to visually represent the data in a visually appealing way
	 - Hopefully have some basic implementation of visualized data overlaying the map
 - Day 4
	 - Install controls for the user to interact with the data visualization, including jumping to a certain data point, speeding up and slowing down the animation.
	 - Continue styling for a beautiful, finished product.

## Bonus Features

 - Allow user to select which one-week timeline they'd like visualized
 - Add functionality to allow the user to view more than one week at a time
 - Add a search feature to allow a user to quickly view the data for their favorite (or least favorite) subway station.
