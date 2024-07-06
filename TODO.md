# TODO

This is a roadmap of sorts of things to be added to the library.

## Inside string.is_a

Add a special utility functions to handle different character expressions for decimal and thousands place separators. For example, if both the dot and comma are present, the rightmost one is the decimal and it must then appear only once--the other one must be in the proper thousands place positions. If only one or the other is present, then if it appears more than once, it must appear in the proper thousands place positions, but if it appears only once, then it could be anywhere. Utilities to help detect number systems, etc. Nice article on decimal separators: https://en.wikipedia.org/wiki/Decimal_separator
