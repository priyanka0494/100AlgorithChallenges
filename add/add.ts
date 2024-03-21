/**
    Write a function that returns the sum of two numbers.

    Example
    For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
 */

export function add(param1: number, param2: number): number {
    return param1 + param2;
}

export function add2(...param1: number[]): number {
    return param1.reduce((a, c) => a + c, 0)
}

// console.log(add(1, 2));
// console.log(add(3, 2));

// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
