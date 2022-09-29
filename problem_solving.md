# Notes: Algorithms and Problem Solving Patterns : Introduction to Problem Solving

## Objectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

## What is an algorithm?

An algorithm is a **process** or **set of steps** to accomplish a certain task.

Almost everything that you do in programming involves some kind of algorithm. Whether its very basic things you are doing or building a complex application, you are using algorithms. It is the foundation for being a successful problem solver and developer.

## How do you improve at problem solving?

1. Devise a plan for solving problems
2. Master common problem solving patterns

## Problem Solving Strategies

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor

## Step 1: Understand the Problem

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
- How should I label the important pieces of data that are a part of the problem?

Example: Write a function which takes two numbers and returns their sum.

- Can I restate the problem in my own words?

  - a function that adds two numbers and returns the result.

- What are the inputs that go into the problem?

  - Is it a float or an integer?
  - Are we always going to be adding two numbers?
  - What if we are adding more than two numbers?
  - what if one number is omitted?
  - Are the numbers positive or negative?

- What are the outputs that should come from the solution to the problem?

  - Is it a float or an integer?
  - What if the result is a decimal?
  - What if the result is a negative number?

- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

  - Yes, we have enough information to solve the problem.

- How should I label the important pieces of data that are a part of the problem?
  - num1, num2, result

Step 1 is the most important step. If you can't understand the problem, you can't solve it.

## Step 2: Explore Concrete Examples

Coming up with examples can help you understand the problem better. Examples also provide sanity checks that your eventual solution works how it should. User stories or test cases are examples of this.

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

Example: Write a function which takes in a string and returns counts of each character in the string.

- Start with simple examples

```js
charCount("aaaa"); // {a: 4}
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
```

- Progress with more complex examples

```js
charCount("my phone number is 182763"); // {m: 1, y: 1, p: 1, h: 1, o: 1, n: 3, e: 1, b: 1, r: 2, u: 1, m: 1, b: 1, e: 1, r: 1, i: 1, s: 1, 1: 1, 8: 1, 2: 1, 7: 1, 6: 1, 3: 1}

// => If this was the input what would we expect to return? Would we account for spaces? What about other characters, dollar sign, numbers?

charCount("Hello hi"); // {h: 2, e: 1, l: 2, o: 1, " ": 1, i: 1}

// => Do we store an uppercase and lowercase letter as two different characters? What about spaces?
```

- Explore examples with empty inputs

```js
charCount(""); // {}

// => What would we expect to return? Would we return an empty object or null or false or undefined? or maybe and error?
```

- Explore examples with invalid inputs

```js
charCount(123); // Error?? false?? null?? undefined??

// => What if some passes in something that is not a string? What would we expect to return? Would we return an empty object or null or false or undefined? or maybe and error?
```

## Step 3: Break it down

Explicitly write out the steps you need to take.
You can write this out in comments or pseudo code. It's important to write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

Example: Write a function which takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

// => What are the steps we need to take?

// 1. Create an object to return at the end of the function
// 2. Loop over the string, for each character...
// 3. If the char is a number/letter AND is a key in object, add one to count
// 4. If the char is a number/letter AND not in object, add it to object and set value to 1
// 5. If the char is something else (space, period, etc.) don't do anything
// 6. Return object at end
```

## Step 4: Solve or Simplify

Solve the problem if you can. If you can't, solve a simpler problem. Try to ignore the difficulty of the problem and focus on solving it. Instead of getting stuck on one problem, try to solve a simpler problem.

Example: Write a function which takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  // if character is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}
```

## Step 5: Look back and refactor

Refactoring questions to ask yourself:

- can you check the result?
- can you derive the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problem?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other people solved this problem?

Example: Write a function which takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

refactored:

```js
function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = obj[char]++ || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}
```

## Recap

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor
