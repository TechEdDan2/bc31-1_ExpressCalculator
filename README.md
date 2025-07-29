# Express Calculator Exercise

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Setup Instructions](#setup-instructions)
- [My Process](#my-process)
  - [File Structure](#file-structure)
- [Author](#author)
- [Acknowledgements](#acknowledgments)
- [License](#license)

## Overview
This is a simple Express.js application that provides endpoints to perform basic statistical calculations such as mean, median, and mode on a list of numbers provided in the query string.

### Features
- **Mean Calculation**: Returns the mean of a list of numbers.
- **Median Calculation**: Returns the median of a list of numbers.
- **Mode Calculation**: Returns the mode of a list of numbers.

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone
2. Navigate to the project directory:
   ```bash
   cd express-calc-exercise
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to access the application. 

## My Process
For the most part I followed the instructions provided in the exercise. In the future to improve the functionality and redundant code, I might also create a function to handle the error checking of the query string.

### File Structure
```
express-calc-exercise/
├── app.js
├── package.json            
├── package-lock.json
├── statOps.js
├── expressError.js
└── README.md  
``` 

## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, vairous Udemy courses, Geeks for Geeks, and Stony Brook University's Software Engineering Bootcamp (Colt Steele) 

## License
This project is licensed under the ISC license