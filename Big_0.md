# Notes: Big O Notation

## Objectives

- What is Big O Notation
- How to calculate Big O Notation
- How to compare Big O Notations
- How to simplify Big O Expressions
- Be able to define "time complexity" and "space complexity"
- How to evaluate the time complexity and space complexity of different algorithms using Big O Notation

## What is Big O Notation and why does it matter?

Big O is like a system of measurement for how fast an algorithm is. It's how we compare the efficiency of different algorithms. Basically It's a way of generalizing code to compare its performance to other pieces of code.

But if the code works why would should we care if its the best solution. I mean the the problem is solved, so why should it matter how fast or efficient it is?

Well, in most situations depending on the scope and context of the project you are working on, you may not care about the efficiency of your code. But in some situations you may need to care about the efficiency of your code.

For example, if you are working on a project that is going to be used by millions of people, you may need to care about the efficiency of your code. Say you're building a website thats going to have lots of users, and you have a piece of code that is going to run every time a user logs in. If that code is inefficient it might take a long time to run and that could cause a lot of problems for your users. People don't like waiting for things to load, so if your code is slow, they are going to get frustrated and leave your website.

Another example is if you are working on a project that is going to be used by a lot of people, but you don't have a lot of money to spend on servers. If you have a piece of code that is inefficient, it might take a lot of resources to run, and that could cause your server to crash. If your server crashes, then your website is going to be down and people are going to get frustrated and leave your website.

So yes it matters that your code works, but it also matters how fast it works or how efficient your code is, especially in large projects. Writing better and more efficient code can save you a lot of money and significantly improve the experience of your users.

So now, how exactly do we measure the efficiency of our code? How do we know that one particular code is better or more efficient than another? We use `Big O Notation`.

## Timing our code

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n, (could be 6, could be 258, we don't know so lets say n).

The most common solution is usually a `for loop`. Basically create a total variable (an accumulator) and then loop through the numbers from 1 to n and add each number one at a time and save the sum in the total variable. e.g.

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

However, there is a second solution. We can also use a formula to solve the problem. we take n and multiple it by n plus 1 and then divide it by 2.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

So now there a two different solutions to the same problem. Which one is better? and what does better mean? Is the code which is more readable? or the code which is faster or the one that uses less memory?

Earlier in the website with lot of users example we talked about faster and less memory. So first, lets go with faster.

How do we know which one is faster? Well, we can use a timer to see how long it takes for each function to run. We can use the `performance.now()` method to get the current time in milliseconds. We can then call the function and then call the `performance.now()` method again to get the current time in milliseconds. Then we can subtract the first time from the second time to get the total time it took for the function to run.

For the first solution:

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

For the second solution:

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

When we run these tests, we will see that the first solution is much slower than the second solution. The first solution varies but it does takes about a second to run, while the second solution takes about 0.0000001 seconds.

The second solution is significantly shorter in duration compared to the first and so we can say the second solution is more efficient than the first is speed is what we are measuring.

But using this process of timing our code manually is not always the most reliable. There is a couple of problems with this approach.

First, the timing is not always accurate. Different machines will record different times, and the same machine will record different times. So for fast algorithms, speed measurements may not be precise enough.

for example when measuring the speed of the first algorithm I got a time of about 1 second. But when I run the code again I got a time of about 1.2 seconds.

Different machines will record different times, and even the same machine will record different times. Depending on the specs of the machine, the background processes running on the machine, and other factors, the speed of the code will vary but that also doesn't mean that we will get the opposite result where the first solution is magically faster the second. The second will always be faster, its just that margins will change, the actual measurements will vary so we can't always rely on this method to determine how fast an algorithm is if its always going to be different.

Also for really fast algorithms speed measurements may not be precise enough. For example, if we run the second solution again, we get a time of about 0.0000001 seconds. But if we run it again, we get a time of about 0.0000002 seconds. The time interval is so small that it is not precise enough to measure. say we had a third solution that was as fast as the second and its measurement fluctuated around 0.0000001 and 0.00000002 also, how would we know which one is faster?

So if we are not using time, what do we use?

How about counting the number of simple operations the computer has to perform?

## Counting Operations

Rather than counting the exact seconds that it takes for a code to run which can change so much, we can count the number of simple operations the computer has to perform because that remains constant no matter that computer we are using.

If we simplify this approach, using our two example above,
lets start with the second solution.

We can say the second solution has 3 operations: the multiplication, the addition and the division, and it doesn't really matter what n is. If n is 2 or a billion there's only 3 operations regardless of the size of n.

comparing it to the first solution, we can say this one has a few more operations: the addition and we count that as one operation but the difference here is this is in a loop, so if n is 5, we are adding 5 things, thats 5 operations, if n is 20, there's a 20 operations. So we can say that the number of operations for first algorithm grows as n grows.

If we are being very thorough about this there's actually a lot more operations, there's the variable assignment, comparison operations, and so on. But for now lets stick with the number of arithmetic operations because regardless of the exact number, as n grows, the number of operations grows roughly in proportion with n.

So we can say that the number of operations for first solution is more than the number of operations for the second.

So now that we haven gone through the timing approach and the counting approach, we can say that the second solution is better than the first. But what is the Big O Notation of each solution?

## Big O Notation

Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

It's a way of describing the relationship between the input to a function as it grows and how that changes the runtime of the function or the time relative to that function.

We don't care about the details, only the broad trends. We care about the general shape of the curve, not the exact curve.

We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases.

`f(n)` simply means a function with an input of n.

`f(n)` could be linear `(f(n) = n)`, quadratic `(f(n) = n2)`, constant `(f(n) = 1)`, or something entirely different!

- It could be linear `(f(n) = n)` which means that as n grows, the time is takes to perform the number of operations or the runtime time grows as well (linearly).

- It could be quadratic `(f(n) = n2)` which means that as n grows, the runtime time squares related to the square of n. The number of operations grows quadratically.

- It could be constant `(f(n) = 1)` which means that as n grows, the number of operations stays the same which we simplify down to one.

- It could be something entirely different!

One thing to note is that when we talk about Big O , we are talking about the worst case scenario. We are talking about the upper bound for runtime.

So we can say that the first solution is `O(n)` and the second solution is `O(1)`.

An `O(n2)` is and `O(n)` operation inside of an an `O(n)` operation. e.g.

```js
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
  }
}
```

## Big O Shorthands

- Arithmetic operations are constant.
- Variable assignments are also constant.
- Accessing elements in an array (by index) or object (by key) is constant.
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

## Space Complexity

Earlier in the notes when talking about why efficient code matters, I gave an example on how writing efficient code can save us money and how inefficient code might take up too much resources (memory) and crush our servers. So far we have been talking about time complexity, but there is also space complexity.

Space complexity is just like time complexity, but we are concerned with space (auxiliary space) instead of time. It's basically a measure of how much additional memory we need to allocate in order to run the code in our algorithm.

We can use Big O notation to analyze space complexity as well. We can use it to analyze the amount of memory that an algorithm takes up.

- Most primitives (booleans, numbers, undefined, null) are constant space. It doesn't matter how many of them we have, they take up the same amount of space.

- Strings require `O(n)` space (where n is the string length).

- Reference types are generally `O(n)`, where n is the length (for arrays) or the number of keys (for objects).

For example:

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

In this example, the space complexity is `O(1)` because we are only allocating space for the total variable.

Example 2:

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

In this example, the space complexity is `O(n)` because we are allocating space for the newArr variable and the space is proportional to the size of the input array.
