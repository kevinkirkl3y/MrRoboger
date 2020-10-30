# Mr Robogers' Number Bumbler

#### _JQuery, JavaScript, For Loop and Array Practice for Epicodus 10.23.2020_

#### by _**Kevin Kirkley**_

## Description
This program takes a numerical input from the user, creates an array with a range from 0 to the number the individual has input and replaces 1, 2, 3 with 'Beep!', 'Boop!' and 'Won't you be my neighbor?' respectively. It then displays this array along with an image of Mr. Robogers with Mr. Rogers. Further, after clicking the 'Countdown' button it will reverse the array and display the countdown from the input number as well as the same image flipped. 

## Specifications

| Describe: numBumble() | Input | Output |
| :-----------------------------------| :------------- | :------------- |
| The program will take a number from the user and return a range of numbers from zero to the user input. | 5 | 0,1,2,3,4,5 |
|The program will recognize numbers within range containing a 1 and replace all applicable digits with "Beep!" | 5| 0,Beep!,2,3,4,5 |
|The program will recognize numbers within range containing a 2 and replace all applicable digits with "Boop!" | 5 | 0,Beep!,Boop!,3,4,5 |
|The program will recognize numbers within range containing a 3 and replace all applicable digits with "Won't you be by neighbor?" | 5 | 0,Beep!,Boop!,Won't you be my neighbor?,4,5 |
|In numbers that contain 1 and 2 the actions of 2 will override that of 1. | 12 | 0,Beep!,Boop!, Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop! |
|In numbers that contain 1, 2 and 3 the action of 3 will override those of 1 and 2. | 13 | 0,Beep!,Boop!, Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor? |



## Setup/Installation Requirements

Software Requirements
1. Internet Browser
2. A code editor such as VSCode in order to view or edit codebase. 

Open by downloading:
1. Download the [repository](https://github.com/kevinkirkl3y/MrRoboger.git) onto your computer by clicking the 'clone or download button'.
2. Double click the index.html to open it within your browser.

Open with Bash/GitBash:
1. Clone this repository onto your computer: 'git clone https://github.com/kevinkirkl3y/MrRoboger.git'
2. Navigate into the 'MrRoboger' directory and open in VSCode or preferred text editor using 'code .' in your terminal.
3. Open index.html in Google Chrome or your preferred browser. 

View my live website here: 
[Mr Rogers Number Bumbler](kevinkirkl3y.github.io/MrRoboger/)

## Known Bugs

* When user has inputed, submitted and then counted down. If they input another number to create new list and countdown that number as well, the countdown section will display the previous entries and then the new entry. Currently trying to fix this bug. 
* _Fixed this bug by removing need for another variable. Created new bug where if new input is given before refresh it will continue to flip the original input's response indefinitely_
* _To provide a work around for these issues I used a refresh button that appears after the 'Countdown' button is clicked while making the input and 'Countdown' button disapear. This will force the user to refresh the page after every entry._ 10.30.2020


## Support and contact detail

_Contact Kevin Kirkley at [kevinmkirkley@gmail.com](mailto:kevinmkirkley@gmail.com) with and questions, concerns or additions._

## Technologies Used 

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Git_
* _JQuery_
* _JavaScript_
* _VSCode_
* _Google Fonts_

### License

Copyright (c) 2020 **_Kevin Kirkley_**
This software is licensed under the MIT license.