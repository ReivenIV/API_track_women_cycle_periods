const Joi = require('joi');

class Validator {
  constructor(schema) {
    this.schema = schema;
  }

  validate(req, res, next) {
    const { error } = this.schema.validate(req.body);

    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      return res.status(400).json({ error: errorMessage });
    }
    next();
  }
}


class Schemas {
  static get sleepSchema() {
    return Joi.object({
      cycle_id: Joi.number().required(),
      created_at: Joi.date().required(),
      note: Joi.string(),
    });

    
  }
}


module.exports = {
  Schemas,
  Validator,
};
