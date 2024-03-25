### Use Camel Case

Use camel case for variable and function names. Start with a lowercase letter
and capitalize the first letter of each subsequent word. Do not use underscores.
For example:

```
let myVariableName = "Example";
function myFunctionName() { ... }
```

### Use Prettier formatting code

### Whitespaces and Indentation

- Use 4 spaces for indentation.

### Use Semicolons

- Always use semicolons.

### Use Single Quotes

- Use single quotes for strings except to avoid escaping.

### Use Const and Let

- Use `const` and `let` instead of `var`.
- Use `const` by default, unless a variable needs to be reassigned.

### Use Default Parameters

- Use default parameter syntax rather than short-circuiting. for example

```
function foo(x = 1) {
  return x;
}
```

### Use Template Literals

- Use template literals instead of concatenation. example:

```
const name = "John";
console.log(`Hello, ${name}!`);
```

### Use Arrow Functions

- Use arrow functions instead of function expressions. for example:

```
const add = (a, b) => a + b;
```

### Use Async/Await

- Use async/await instead of raw Promises.

### Use Classes

- Use classes instead of prototypes.

### Use Modules

- Use modules (import/export) over a non-standard module system.

### Use Strict Equality

- Use `===` and `!==` instead of `==` and `!=`.

### Use Ternary Operators

### Use Short-Circuit Evaluation

- Use short-circuit evaluation for setting default values. for example:

```
const foo = input || "default";
```

### Use Default Exports

- Use default exports for single exports. for example:

```
export default function foo() { ... }
```

### Use Named Exports

- Use named exports for multiple exports. for example:

```
export const = foo => () { ... }
```
