/**
 * Custom Error Handler function
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

import { Request, Response, NextFunction } from 'express';
import CustomError from './CustomError';

// customErrorHandler middleware
const customErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let customError = err;

    // Handle specific error types
    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpected Syntax", 400);
    } else if (err.name === "ValidationError") {
        customError = new CustomError(err.message, 400);
    } else if (err.code === 11000) {
        customError = new CustomError("Duplicate Key Found: Check Your Input", 400);
    }

    // Handle generic errors
    res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};

export default customErrorHandler;
