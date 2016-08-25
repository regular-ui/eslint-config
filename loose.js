module.exports = {
    extends: ['./.eslintrc.js'],
    rules: {
        // Possible Errors
        'no-console': [0],
        'no-debugger': [0],
        'no-empty': [1, { allowEmptyCatch: true }],
        'no-prototype-builtins': [1],
        'no-unreachable': [1],
        'no-unsafe-finally': [2],
        'use-isnan': [2],
        'valid-typeof': [2],

        // Best Practices
        'curly': [1, 'multi-or-nest'],
        'no-alert': [0],
        'no-eq-null': [1],
        'no-eval': [1],
        'no-implied-eval': [2],
        'no-magic-numbers': [0],
        'no-multi-spaces': [1],
        'no-multi-str': [1],
        'no-octal': [1],

        // Strict Mode

        // Variables
        'no-undef': [0],
        'no-unused-vars': [0],

        // Node.js and CommonJS

        // Stylistic Issues
        'object-curly-spacing': [1, 'always'],
        'func-style': [0], // @unsupport export function test()

        // ECMAScript 6
        'object-shorthand': [1, 'always'],
        'prefer-const': [0],
    },
}
