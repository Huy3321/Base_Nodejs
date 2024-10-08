import { StatusCodes } from 'http-status-codes';

class ApiError extends Error {
  constructor(
    message,
    httpStatusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    context,
    ...params
  ) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.message = message;
    this.status = httpStatusCode;
    this.context = context;
    this.date = new Date();
  }
}

module.exports = ApiError;
