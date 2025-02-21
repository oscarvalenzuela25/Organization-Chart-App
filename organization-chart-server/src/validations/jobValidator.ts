import joi from 'joi';

export const deleteJobParamsSchema = joi.object({
  id: joi.number().required(),
});

export const addJobBodySchema = joi.object({
  tierId: joi.number().required(),
  jobParentId: joi.number().required(),
});

export const updateJobParamsSchema = joi.object({
  id: joi.number().required(),
});

export const updateJobBodySchema = joi.object({
  name: joi.string().optional(),
  openings: joi.number().optional(),
  tierId: joi.number().optional(),
  divisionId: joi.number().optional(),
});

export const updateJobUsersParamsSchema = joi.object({
  id: joi.number().required(),
});

export const updateJobUsersBodySchema = joi.object({
  usersSelected: joi
    .array()
    .items(
      joi.object({
        id: joi.number().required(),
        name: joi.string().required(),
        createdAt: joi.date().optional(),
        updatedAt: joi.date().optional(),
      })
    )
    .required(),
});
