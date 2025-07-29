/**
 * Custom error class for Express applications
 * that extends the built-in Error class.
 * It includes a message and a status code.
 * 
 * @param {string} message - The error message.
 * @param {number} status - The HTTP status code.   
 *  
 */
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

module.exports = ExpressError;