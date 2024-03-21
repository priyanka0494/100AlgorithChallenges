/*
    Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

    is the smallest possible (here abs denotes the absolute value). If there are several possible answers, output the smallest one.

    Example

    For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.
*/

export function absoluteValuesSumMinimization(a: number[]): number {
    return a[Math.floor(a?.length / 2) - (a?.length % 2 ? 0 : 1)]
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));