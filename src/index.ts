/**
 * Main file
 * CustomError class and customErrorHandler middleware was included.
 * 
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

import express, { Request, Response, NextFunction } from 'express';
import CustomError from './CustomError';
import customErrorHandler from './customErrorHandler';

const app = express();

// A test route has been created for the error.
app.get('/errorTest', (req: Request, res: Response, next: NextFunction) => {
    return next(new CustomError("Error", 404));
});

const PORT = 3000;

// The customErrorHandler middleware was included as app.use(customErrorHandler()).
app.use(customErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});