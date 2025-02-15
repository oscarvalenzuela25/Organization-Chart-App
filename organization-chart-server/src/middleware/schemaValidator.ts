import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validateSchema = (
  schema: ObjectSchema,
  property: 'body' | 'params' = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req[property]);
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      next();
    }
  };
};
