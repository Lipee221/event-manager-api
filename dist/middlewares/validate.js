export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        return res.status(400).json({
            error: 'Erro de validação',
            issues: error.errors
        });
    }
};
