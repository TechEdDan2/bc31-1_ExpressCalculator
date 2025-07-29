const express = require('express');
const EE = require('./expressError');
const { findMean, findMedian, findMode } = require('./statOps');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple Home Page
app.get('/', (req, res) => {
    console.log("HOME");
    res.send('<h1>Express Calculator Home Page</h1>');
});

// ---------------- //
//      Routes      //
// ---------------- //

/**
 * GET /mean
 * Returns the mean of a list of numbers provided in the query string.
 * Example: /mean?nums=1,2,3,4,5
 * Returns: { "mean": 3 }
 * If no numbers are provided, returns an error.
 */
app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new EE('Missing query term nums and list of numbers separated by commas', 400);
        }
        const nums = req.query.nums.split(',');
        console.log(nums);
        const chkNumbers = nums.map(n => {
            const num = Number(n);
            if (isNaN(num)) {
                throw new EE(`Invalid number: ${n}`, 400);
            }
            return num;
        });
        console.log(chkNumbers);
        const mean = findMean(chkNumbers);
        return res.json({ operation: 'mean', value: mean });

    } catch (e) {
        next(e);
    }

});

/**
 * GET /median
 * Returns the median of a list of numbers provided in the query string.
 * Example: /median?nums=1,2,3,4,5
 * Returns: { "median": 3 }
 * If no numbers are provided, returns an error.
 */
app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new EE('Missing query term nums and list of numbers separated by commas', 400);
        }
        const nums = req.query.nums.split(',');
        console.log(nums);
        const chkNumbers = nums.map(n => {
            const num = Number(n);
            if (isNaN(num)) {
                throw new EE(`Invalid number: ${n}`, 400);
            }
            return num;
        });
        console.log(chkNumbers);
        const median = findMedian(chkNumbers);
        return res.json({ operation: 'median', value: median });

    } catch (e) {
        next(e);
    }

});

/**
 * GET /mode
 * Returns the mode of a list of numbers provided in the query string.  
 * Example: /mode?nums=1,2,2,3,4
 * Returns: { "mode": 2 }
 * If no numbers are provided, returns an error.
 * If there are multiple modes, returns an array of modes.
 * Example: /mode?nums=1,1,2,2,3
 * Returns: { "mode": [1, 2] }
 * If the input is invalid, returns an error.
 * Example: /mode?nums=1,2,three
 * Returns: { "error": { "message": "Invalid number: three", "status": 400 } }
 */
app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new EE('Missing query term nums and list of numbers separated by commas', 400);
        }
        const nums = req.query.nums.split(',');
        console.log(nums);
        const chkNumbers = nums.map(n => {
            const num = Number(n);
            if (isNaN(num)) {
                throw new EE(`Invalid number: ${n}`, 400);
            }
            return num;
        });
        console.log(chkNumbers);
        const mode = findMode(chkNumbers);
        return res.json({ operation: 'mode', value: mode });

    } catch (e) {
        next(e);
    }
});

/**
 * GET /all
 * Returns the mean, median, and mode of a list of numbers provided in the query string.
 * This will combine the results of the mean, median, and mode endpoints.
 */
app.get('/all', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new EE('Missing query term nums and list of numbers separated by commas', 400);
        }
        const nums = req.query.nums.split(',');
        console.log(nums);
        const chkNumbers = nums.map(n => {
            const num = Number(n);
            if (isNaN(num)) {
                throw new EE(`Invalid number: ${n}`, 400);
            }
            return num;
        });
        console.log(chkNumbers);
        const mean = findMean(chkNumbers);
        const median = findMedian(chkNumbers);
        const mode = findMode(chkNumbers);
        return res.json({
            operation: 'all',
            mean: mean,
            median: median,
            mode: mode
        });
    } catch (e) {
        next(e);
    }
});

// ---------------------------- //
// Error Handlers "Middleware" //
// --------------------------- //

// Generic Error Handler
app.use((req, res, next) => {
    const e = new EE("Page Not Found", 404);
    next(e);
});

// Matching the Routes above
app.use((error, req, res, next) => {
    // Set the default status
    let status = error.status || 500;
    let message = error.message;

    // Set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

// App listen
// This is where the server starts listening for requests
// and it should be the last thing in the file
app.listen(3000, () => {
    console.log('SERVER IS RUNNING');
});