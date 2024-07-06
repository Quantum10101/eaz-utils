# eaz-utils

A cleverly organized set of utilities to make JavaScript development easier.

## Usage

```js
import eaz from 'eaz-utils';
```

The utilities are nested within modules in a way that aids natural language recognition and empowers the developer to drill down and find utilities by harnessing the IDE's intellisense on dot notation. Less looking through documentation and more productivity!

## Functions

### String "is a" Checks

```js
if (eaz.string.is_a.string(str)) ...
if (eaz.string.is_a.number(numberStr)) ...
if (eaz.string.is_a.integer(integerStr)) ...
if (eaz.string.is_a.boolean(booleanStr)) ...
```

### String Parse

```js
const num = eaz.string.parse.number(str);
const int = eaz.string.parse.integer(str);
const bool = eaz.string.parse.boolean(str);
const obj = eaz.string.parse.url("http://example.com?var1=one");
const obj = eaz.string.parse.urlQuery("var1=one&var2=two&var3=three");
```

### String Trim

```js
const leftTrimmed = eaz.string.trim.charsLeft(str, ['/', '\\']);
const rightTrimmed = eaz.string.trim.charsRight(str, ['/', '\\']);
const trimmed = eaz.string.trim.charsBoth(str, ['/', '\\']);

const leftTrimmed = eaz.string.trim.wordLeft(str, 'word');
const rightTrimmed = eaz.string.trim.wordRight(str, 'word');
const trimmed = eaz.string.trim.wordBoth(str, 'word');
```

### Array Union

```js
const uniqueNumbers = easy.array.union([1, 2, 3], [2, 3, 4], [4, 5, 6]);
```

## Test Suite

Install Bun and run `$ bun test`

## MIT License

Copyright 2024 Quantum10101

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
