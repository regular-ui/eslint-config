module.exports = {
    extends: ['./.eslintrc.js'],
    rules: {
        // Possible Errors
        'no-console': [0],
        'no-debugger': [0],
        'no-empty': [1, { allowEmptyCatch: true }],
        'no-unreachable': [1],

        // Variables
        'no-unused-vars': [0],
    },
};
