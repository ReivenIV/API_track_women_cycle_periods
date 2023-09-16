function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const errorDetails = err.details || null;

  // Log the error for debugging purposes
  console.error(`Status Code: ${statusCode}, Message: ${message}`);
  if (errorDetails) {
    console.error("Error Details:", errorDetails);
  }

  // Set the response status and send an error response with a JSON object.
  res.status(statusCode).json({ error: message, details: errorDetails });
}

module.exports = errorHandler;
