# eaz-utils

A cleverly organized set of utilities to make JavaScript and TypeScript development easier.

## Usage

```js
import eaz from 'eaz-utils';
```

The utilities are nested within modules in a way that aids natural language recognition and empowers the developer to drill down and find utilities by harnessing the IDE's intellisense on dot notation. Less looking through documentation and more productivity!

## Functions

### String "is a" Checks

```js
if (eaz.string.isA.string(str)) ...
if (eaz.string.isA.number(numberStr)) ...
if (eaz.string.isA.integer(integerStr)) ...
if (eaz.string.isA.boolean(booleanStr)) ...
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
const uniqueNumbers = eaz.array.union([1, 2, 3], [2, 3, 4], [4, 5, 6]);
```

### Array Object Group By Key

```js
const groupedObjects = eaz.array.object.groupBy(arrObj, "theKey");
const flatGroupedObjects = eaz.array.object.flatGroupBy(arrObj, "theKey");
```

### Array Object Convert To

```js
const keyedObjects = eaz.array.object.convertTo.keyedObjects(arrObj, "theKey");
const keyedValues = eaz.array.object.convertTo.keyedValues(arrObj, "theKey", "theValue");
const flatKeyedObjects = eaz.array.object.convertTo.flatKeyedObjects(arrObj, "theKey");
const flatKeyedValues = eaz.array.object.convertTo.flatKeyedValues(arrObj, "theKey", "theValue");
```

### Object Functions
```js
if (eaz.object.isEmpty(someObject)) ...
```

### File System

```js
const filePath = eaz.fileSystem.pathToScript.file();
const directoryPath = eaz.fileSystem.pathToScript.directory();
const files = eaz.fileSystem.listOf.files(); // current script directory
const directories = eaz.fileSystem.listOf.directories("../"); // parent directory
const entities = eaz.fileSystem.listOf.entities("./child-directory"); // child directory

if (eaz.fileSystem.checkPathType("../some/path/to/something") == eaz.fileSystem.PathType.DOES_NOT_EXIST) ...

// Directory functions
const success = eaz.fileSystem.directory.create("../some/path/to/directory");
const success = eaz.fileSystem.directory.remove("../some/path/to/directory");

// File functions
const success = eaz.fileSystem.file.write.text("../some/path/to/file.txt", "hello");
const success = eaz.fileSystem.file.write.bytes("../some/path/to/file.bin", uint8Array);
const success = eaz.fileSystem.file.append.text("../some/path/to/file.txt", "hello");
const success = eaz.fileSystem.file.append.textLine("../some/path/to/file.txt", "hello");
const success = eaz.fileSystem.file.append.bytes("../some/path/to/file.bin", uint8Array);
const content = eaz.fileSystem.file.get.size("../some/path/to/file.txt");
const content = eaz.fileSystem.file.get.text("../some/path/to/file.txt");
const content = eaz.fileSystem.file.get.bytes("../some/path/to/file.bin");
const success = eaz.fileSystem.file.copy("../some/path/to/source.txt", "../some/path/to/dest.txt"); // returns false if dest.txt is present
const success = eaz.fileSystem.file.move("../some/path/to/source.txt", "../some/path/to/dest.txt", true); // forced overwrite
const success = eaz.fileSystem.file.remove("../some/path/to/file.bin");

const success = eaz.fileSystem.file.write.text("/some/path/from/root/file.txt", "hello");
const success = eaz.fileSystem.file.write.text("~/some/path/from/home/file.txt", "hello");
const success = eaz.fileSystem.file.write.text("some/relative/path/to/file.txt", "hello");
```

### Cryptography

```js
const hash = eaz.cryptography.blake2s.hexString("digest this");
const hash = eaz.cryptography.blake2s.uint8Array("digest this");
```

### Miscellaneous

```js
await eaz.sleep(1000);
```

## Test Suite

Install Bun and run `$ bun test`

## MIT License

Copyright 2024 Quantum10101

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
