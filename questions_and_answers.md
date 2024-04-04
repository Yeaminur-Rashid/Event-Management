<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>B is true because the let variable can be declare with name greeting but when we can assign the variable name is to be greetign so it will give a `ReferenceError: greetign is not defined`.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `TypeError`

<i>B is true because the sum function takes two parameters a and b with addition(+) operator. However there is a type missmatch of two arguments here a(1) is number and b("2") is a string. However JavaScript tring to perform the string concatenation operation and wants to show the result is 12 but the sum function is excepting both a and b to be numbers not for handling the string concatenation operation so it will give a `TypeError` because of tring to adding a number and a string the function does not support it.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `['🍝', '🍫', '🥑', '🍔']`

<i>Initially an array called food containing the four emoji elements ["🍕", "🍫", "🥑", "🍔"]. Then you create an object name info with a property favoriteFood that is initially set to the array food first element is 🍕. Next, you reassign the info.favoriteFood property to 🍝. Finally when you log the food array to the console it remaining unchanged because you only modified the info.favoriteFood property.    </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In the given code the sayHi function excepts a name parameter, but when you call sayHi function without calling an arguments the name variable inside the function is undefined. So, the function returns `Hi there, undefined` and it is logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>For this given code, foreach method iterats through the elements of nums array. The condition if(num) checks the current element is truthy. Since there are three truthy elements 1, 2, 3 is in the array and the count variable is increment three times. After the count variable value is equal to three it is logged to the console.</i>

</p>
</details>
