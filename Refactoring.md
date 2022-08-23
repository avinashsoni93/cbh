# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Instead of multiple peer conditions, keep only one condition as a parent so that the comparison doesn't waste the time and which increases the readability in the sense of if the parent condition fails, need not to read other conditions at a time, with the given parameter.
Instead of repeating the createHash method chain, moved the repetitive code into a function, to increase the modularization.
Incorporated multiple one liner conditions into ternary conditions.
Removed unnecessary temporary variables if are used only once, considering the line is not very big to read carefully
