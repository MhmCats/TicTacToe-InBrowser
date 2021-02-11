# Tic Tac Toe

## What it is.

I made this so anyone could hit Ctrl-Shift-I or whatever the keyboard shortcut for the developer tools is open up the JavaScript console copy and paste the code in and play this with their friends (or just on your own if you uh do that kind of thing).

## How to play on console

Navigate to the folder `console_version` and open either the file `pretty.js` or `compressed.js`. The compressed version is only on one line and is completely unreadable which is why I included a version that you can see the code used if you want to.

## Playing in an HTML file

At the moment I have not created this but it is a feature that I hope to make soon.

## The controls

The controls go as follows:

A blank board looks like this:
```
-   -   -
-   -   -
-   -   -
```
If I were to input the number 1 then the board would update as follows:
```
x   -   -
-   -   -
-   -   -
```
If then the next player inputs the number 7 then:
```
x   -   -
-   -   -
o   -   -
```
They are ordered logically with the first row being:
```
-   -   -
1   2   3
```
The 2nd row:
```
-   -   -
4   5   6
```
And the 3rd row:
```
-   -   -
7   8   9
```

## Bugs

If you find any bugs then make an issue to report it or a pull request if you think you have found a solution although I would rather that you tested out any solutions before you created a pull request.

Thank you for playing or just stopping by to see it.

## To do list

- [ ] Make an HTML version instead of just using prompts
- [ ] Make something that handles when you input an invalid number or a number that has already been used.