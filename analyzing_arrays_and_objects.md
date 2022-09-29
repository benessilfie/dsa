# Notes: Analyzing the Performance of Arrays and Objects

## Objectives

- Understand how objects and arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods.

## Objects

They are unordered data structures and everything is stored in key value pairs.

```js
let student = {
  firstName: "Essilfie",
  isStudent: true,
  favoriteNumbers: [1, 2, 3, 4]
}
```

## When we use objects

- When we don't need order
- When we need fast access/insertion and removal

## Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

When you don't need any order, objects are an excellent choice!

## Big O of Object Methods

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)

## Arrays

Arrays are ordered lists!

```js

let names = ["Essilfie", "Kofi", "Kwame", "Kwesi"];
let values = [true, {}, [], 2, "awesome"];

```

## When we use arrays

- When we need order
- When we need fast access/insertion and removal (sort of...)

## Big O of Arrays

- Insertion - It depends...
- Removal - It depends...
- Searching - O(n)
- Access - O(1)

Insertion and removal can be `O(n)` or `O(1)` depending on the situation. If you are adding or removing from the beginning of the array, it is `O(n)` because you have to reindex everything. If you are adding or removing from the end, it is `O(1)`.

## Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n * log n)
- forEach/map/filter/reduce/etc. - O(n)
