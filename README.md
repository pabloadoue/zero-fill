# pabloadoue/zero-fill

This library is a fork of [zero-fill](https://github.com/feross/zero-fill) originaly created by [feross](https://github.com/feross). I just updated the library to TypeScript so that in can be used without the need to define types, and added testing to the source code.

> Zero-fill a number to the given size.


Installation

```sh
# Using npm
npm install --save @pabloadoue/zero-fill

# Using yarn
yarn add @pabloadoue/zero-fill
```













## Example 



```ts
import zeroFill from "@pabloadoue/zero-fill";

zeroFill(4, 1);
// => "0001"

zeroFill(10, 55);
// => "0000000055"

zeroFill(1, 5);
// => "1"

```


## Documentation


### `zeroFill(input, fillCount, paddingCharacter?)`
Zero-fill a number to the given size.

#### Params

- **Integer** `input`: The input object.
- **Integer** `fillCount`: The path to the value you want to find.
- **String** `paddingCharacter?`: [Optional] Character to use as padding character. Defaults to '0';

#### Return
- **String** The original number as string with `fillCount` leading `paddingCharacter`
