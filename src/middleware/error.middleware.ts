import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  console.error(err);

  return res.status(500).json({
    message: "Internal server error",
  });
};
