# Bitmap code challenge 🚀

## Description

There is given a rectangular bitmap of size n\*m. Each pixel of the bitmap is either white or black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|. Write a program which:
● reads the description of the bitmap from the standard input;
● for each pixel, computes the distance to the nearest white;
● writes the results to the standard output.
Input
The number of test cases t (1≤t≤1000) is in the first line of input, then t test cases follow separated by an empty line. In the first line of each test case there is a pair of integer numbers n, m separated by a single space, 1<=n <=182, 1<=m<=182. In each of the following n lines of the test case exactly one zero-one word of length m, the description of one line of the bitmap, is written. On the j-th position in the line (i+1), 1 <= i <= n, 1 <= j <= m, is '1' if, and only if the pixel (i,j) is white.
Output
In the i-th line for each test case, 1<=i<=n, there should be written m integers f(i,1),...,f(i,m) separated by single spaces, where f(i,j) is the distance from the pixel (i,j) to the nearest white pixel. Example:
```
Input:
1
3 4
0001
0011
0110

Output
3 2 1 0
2 1 0 0
1 0 0 1
```

## Target

To come up with a solution for the bitmap code challenge

### Download the code and setup

1. Clone the repo with `git clone` command.
2. Run `npm install`.

### Run the code

#### Option 1: via terminal

1. Run `npm start`.
2. Enter the input test cases

##### Input data format

<html>
<body>
<div>
<p><em><strong>Note:</strong> Please follow the specified format for input, using invalid format may not yield the right result</p></em>
</div>
</body>
</html>

###### For single test
```
1
3 4
0001
0011
0110

// output
----- Test 1 Result -----
3 2 1 0
2 1 0 0
1 0 0 1

```

###### For multiple tests

```

2
3 4
0001
0011
0110
2 2
10
00

// output
----- Test 1 Result -----
3 2 1 0
2 1 0 0
1 0 0 1
----- Test 2 Result -----
0 1
1 2

```

#### Option 2: via jest
> <em>**NOTE**: jest test do not include coverage. They only test the main login added for bitmap coding challenge</em>
1. Add or update test cases in file [nearestPathCalculator.test.ts]("./test/nearestPathCalculator.test.ts")
2. Run `npm run test`

