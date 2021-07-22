# TWIG CHALLENGE

## TASK

This a simple function that given an array of length >= 0, and a positive integer N, returns the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

Example: groupArrayElements([1, 2, 3, 4, 5], 3); should return // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

## NOTES

For that, we are going to use a recursive function, where the goal is to find an array that can be divided equally by N. If not, the function is going to slice the last element of the array, repeating this action until the division can be done. Once we have a result, we will add a final array with the rest of the elements that we were storing in a third parameter, if it's needed.



## INSTALLATION:

Clone repository: 
### $ `git clone https://github.com/felosa/twig-challenge.git`

### $ `cd twig-challenge`

### $ `npm install`

Run the code with the example:

You can change the line 47, 48 and 49 in the index.js file to check another example. By default this is checking the example of the task 

### $ `npm start`

Run tests:

There are several tests to assure us that the code is working properly.

### $ `npm test`