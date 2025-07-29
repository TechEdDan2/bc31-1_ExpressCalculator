// statOps.js is used to do statistical calculations


/**
 * The findMean function calculates the mean of a list of numbers provided in an array.
 * 
 * @param {number[]} numbers - An array of numbers to calculate the mean.
 * @returns {number} The mean of the numbers.
 * @throws {Error} If the input is not a non-empty array of numbers.
 */
function findMean(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array of numbers');
    }

    const sum = numbers.reduce((acc, num) => {
        if (typeof num !== 'number') {
            throw new Error(`Invalid number: ${num}`);
        }
        return acc + num;
    }, 0);

    return sum / numbers.length;
}

/**
 * The findMedian function calculates the median of a list of numbers provided in an array.
 * 
 * @param {number[]} numbers - An array of numbers to calculate the median.
 * @returns {number} The median of the numbers.
 * @throws {Error} If the input is not a non-empty array of numbers.
 */
function findMedian(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array of numbers');
    }

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

/**
 * The findMode function will validate the parameter
 *  then it will loop through the array to build a frequency 
 *  map and find the number with the highest frequency
 * 
 * @param {number[]} numbers - An array of numbers to calculate the mode. 
 * @returns {number|number[]} The mode of the numbers, or an array of modes if there are multiple.
 * @throws {Error} If the input is not a non-empty array of numbers or contains
 */
function findMode(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('input must be a non-empty array of numbers');
    }

    //Use the number as a key and then keep count
    const frequencyMap = {};
    for (let num of numbers) {
        if (typeof num !== 'number') {
            throw new Error(`Invalid number: ${num}`);
        }
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }


    let maxFreqVal = 0;
    let modes = [];

    // Loop through the frequency map to find the mode(s)
    // If there is a tie, return an array of modes
    // If there is no tie, return the single mode
    for (let num in frequencyMap) {
        if (frequencyMap[num] > maxFreqVal) {
            maxFreqVal = frequencyMap[num];
            modes = [Number(num)];
        } else if (frequencyMap[num] === maxFreqVal) {
            modes.push(Number(num));
        }
    }
    if (modes.length === 1) {
        return modes[0];
    }
    return modes;
}

module.exports = { findMean, findMedian, findMode };