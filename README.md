Dish Coding Challenge - Feb 1, 2017

Implement a credit card number validation microservice using Luhn's
algorithm (a.k.a Mod 10). It shall handle all 4 credit card types
(Visa, MAsterCard, Americal Express, and Discover). AE card numbers
are 15 digits and the rest ar 16 digits.

Luhn's Algorithm:

1. From the rightmost digit, which is the check digit, moving left,
double the value of every digit. If the product of this doubling is
greater than 9 (7*2=14), then sum the digits of the product. For example,
10: 1+0=1, 14: 1+5=5).

2. Take the sum of all the digits
3. If the total modulo 10 of the sum is equal to 0, then the number is
valid, else it is not valid.