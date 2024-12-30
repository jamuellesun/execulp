const n = {
    operator: '&&',  // Operator can be '&&' (AND) or '||' (OR)
    left: true,      // Left operand
    right: false     // Right operand
};

// Define the $ function
const $ = (expr) => {
    if (typeof expr === 'boolean') {
        return expr; // Base case: if expr is already a boolean, return it
    } else {
        // Recursive case: evaluate the logical expression
        return LogicalExpression($, expr);
    }
};

// Evaluate the logical expression
const result = LogicalExpression($, n);
console.log(result);  // Outputs: false (since true && false evaluates to false)
