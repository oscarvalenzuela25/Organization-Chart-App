import Joi from 'joi';

export const updateTierParamsSchema = Joi.object({
  id: Joi.number().required(),
});

export const updateTierBodySchema = Joi.object({
  name: Joi.string().required(),
});
