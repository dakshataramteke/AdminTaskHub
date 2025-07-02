const Joi = require('joi');

const ValidationSchema = Joi.object({
    fname: Joi.string().min(3).max(30).required(),
    lname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    role: Joi.string().valid('admin', 'employee').required()
});

const EmployeeValidationSchema = Joi.object({
    fname: Joi.string().min(3).max(30).required(),
    lname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    role: Joi.string().valid('admin', 'employee').required(),
    position: Joi.string().required()
});

module.exports = {ValidationSchema, EmployeeValidationSchema};