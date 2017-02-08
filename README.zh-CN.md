# Regular UI JavaScript 代码规范
## 目录
- [空白](#空白)
- [块](#块)
- [分号和逗号](#分号和逗号)
- [字符串](#字符串)
- [对象和属性](#对象和属性)
- [运算符](#运算符)
- [条件](#条件)
- [变量和作用域](#变量和作用域)
- [命名](#命名)
- [类型](#类型)
- [数字](#数字)
- [函数和箭头函数](#函数和箭头函数)
- [类和构造器](#类和构造器)
- [正则表达式](#正则表达式)
- [低级错误](#低级错误)
- [其他项](#其他项)
- [注释](#注释)
- [生产环境](#生产环境)

> 说明：
> - 语气：强制 > 要求 == !禁止 > 尽量 > 推荐 == !不推荐；
> - 🔧表示ESLint可以自动修复。

## 空白
#### 要求使用4个空格作为缩进，禁止使用Tab。🔧
[indent](http://eslint.cn/docs/rules/indent), [no-tabs](http://eslint.cn/docs/rules/no-tabs), [no-mixed-spaces-and-tabs](http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs)

``` javascript
// ✗ bad
function () {
  console.log('Hello');
}

// ✗ bad
function () {
——console.log('Hello');
}

// ✓ good
function () {
    console.log('Hello');
}
```

#### 强制使用Unix换行符`\n`，禁止使用Windows换行符`\r\n`🔧
[linebreak-style](http://eslint.cn/docs/rules/linebreak-style)

#### 禁止使用Unicode字节顺序标记（BOM）。🔧
[unicode-bom](http://eslint.cn/docs/rules/unicode-bom)

#### 要求文件末尾有且只有一个空行。🔧
[eol-last](http://eslint.cn/docs/rules/eol-last)

``` javascript
// ✗ bad
(function (global) {
    // ...stuff...
})(this);
```

``` javascript
// ✗ bad
(function (global) {
    // ...stuff...
})(this);↵
↵
```

``` javascript
// ✓ good
(function (global) {
    // ...stuff...
})(this);↵
```

#### 禁止连续出现多个空行。🔧
[no-multiple-empty-lines](http://eslint.cn/docs/rules/no-multiple-empty-lines)

``` javascript
// ✗ bad
const value = 'Hello';


console.log(value);
```

``` javascript
// ✓ good
const value = 'Hello';

console.log(value);
```

#### 禁止块的内边缘出现空行。🔧
[padded-blocks](http://eslint.cn/docs/rules/padded-blocks)

``` javascript
// ✗ bad
function bar() {

    console.log(foo);

}

// ✓ good
function bar() {
    console.log(foo);
}
```

#### 要求运行指令之后必须有一个空行。🔧
[lines-around-directive](http://eslint.cn/docs/rules/lines-around-directive)

``` javascript
// ✗ bad
'use strict';
let foo;
```

``` javascript
// ✓ good
'use strict';

let foo;
```

#### 禁止行尾出现空格。🔧
[no-trailing-spaces](http://eslint.cn/docs/rules/no-trailing-spaces)

#### 禁止连续出现多个空格。🔧
[no-multi-spaces](http://eslint.cn/docs/rules/no-multi-spaces)

``` javascript
// ✗ bad
let a =  1;
if(foo   === 'bar') {}
a <<  b
let arr = [1,  2];
a ?  b: c;

// ✓ good
let a = 1;
if(foo === 'bar') {}
a << b
let arr = [1, 2];
a ? b: c;
```

#### 要求分号、逗号、冒号之后必须有一个空格。🔧
[semi-spacing](http://eslint.cn/docs/rules/semi-spacing), [comma-spacing](http://eslint.cn/docs/rules/comma-spacing), [key-spacing](http://eslint.cn/docs/rules/key-spacing)

``` javascript
// ✗ bad
const arr = [1,2,3,4];
const obj = { id:1,name:'Alice' };
foo(a,b,c);
for (let i = 0;i < 10;i++)

// ✓ good
const arr = [1, 2];
const obj = { id: 1, name: 'Alice' };
foo(a, b, c);
for (let i = 0; i < 10; i++)
```

#### 禁止点号（属性、rest参数、扩展运算符）和单词之间有空格。🔧
[no-whitespace-before-property](http://eslint.cn/docs/rules/no-whitespace-before-property), [rest-spread-spacing](http://eslint.cn/docs/rules/rest-spread-spacing)

``` javascript
// ✗ bad
foo. bar. baz();
fn(... args);
[... arr, 4, 5, 6];

// ✓ good
foo.bar.baz();
fn(...args);
[...arr, 4, 5, 6];
```

#### 要求一元运算符周围没有空格，等号、二元运算符、箭头符号周围有一个空格。🔧
[space-unary-ops](http://eslint.cn/docs/rules/space-unary-ops), [space-infix-ops](http://eslint.cn/docs/rules/space-infix-ops), [arrow-spacing](http://eslint.cn/docs/rules/arrow-spacing)

``` javascript
// ✗ bad
i ++;
let x=-y*5;
let message='Hello, '+name+'!';
const func=(x)=>{};

// ✓ good
i++;
let x = -y * 5;
let message = 'Hello, ' + name + '!';
const func = (x) => {};
```

#### 禁止在小括号（表达式、函数）和中括号（数组、属性）内边缘加空格，要求在大括号（对象、单行代码块）内边缘加一个空格。🔧
[space-in-parens](http://eslint.cn/docs/rules/space-in-parens), [array-bracket-spacing](http://eslint.cn/docs/rules/array-bracket-spacing), [computed-property-spacing](http://eslint.cn/docs/rules/computed-property-spacing), [object-curly-spacing](http://eslint.cn/docs/rules/object-curly-spacing), [block-spacing](http://eslint.cn/docs/rules/block-spacing)

``` javascript
// ✗ bad
const num = 3 * ( 2 + 5 );
function hello( name ) {
    console.log( 'Hi,', name );
}
if ( test ) {
    thing();
}

// ✓ good
const num = 3 * (2 + 5);
function hello(name) {
    console.log('Hi,', name);
}
if (test) {
    thing();
}

// ✗ bad
const arr = [ 1, 2, 3 ];
const [ x, y ] = z;
obj[ key ] = 'test';
user[ 'name' ] = 'John';

// ✓ good
const arr = [1, 2, 3];
const [x, y] = z;
obj[key] = 'test';
user['name'] = 'John';

// ✗ bad
const obj = {id: 1, name: 'Alice'};
const {x, y} = z;
function foo() {return true;}
if (foo) { bar = 0;}

// ✓ good
const obj = { id: 1, name: 'Alice' };
const { x, y } = z;
function foo() { return true; }
if (foo) { bar = 0; }

// ✗ bad
product.attr({price: 10.6, tags: ['food', 'sweet']});
product.attr( { price: 10.6, tags: [ 'food', 'sweet' ] } );

// ✓ good
product.attr({ price: 10.6, tags: ['food', 'sweet'] });
```

#### 要求在大括号前放一个空格。🔧
[space-before-blocks](http://eslint.cn/docs/rules/space-before-blocks)

``` javascript
// ✗ bad
function test(){
    console.log('test');
}

// ✓ good
function test() {
    console.log('test');
}

// ✗ bad
dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog',
});

// ✓ good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

#### 要求在关键字和小括号之间加一个空格，禁止在函数名和参数列表之间加空格。🔧
[keyword-spacing](http://eslint.cn/docs/rules/keyword-spacing), [func-call-spacing](http://eslint.cn/docs/rules/func-call-spacing), [space-before-function-paren](http://eslint.cn/docs/rules/space-before-function-paren)

> 保持一致是最好的，你不需要在添加/删除函数名时，考虑要不要添加/删除空格。

``` javascript
// ✗ bad
if(isJedi) {
    fight ();
} else {
    chat ();
}

// ✓ good
if (isJedi) {
    fight();
} else {
    chat();
}

// ✗ bad
function fight () {
    console.log ('Swooosh!');
}
run(function() {
    console.log ('Swooosh!');
});

// ✓ good
function fight() {
    console.log('Swooosh!');
}
run(function () {
    console.log('Swooosh!');
});
```

#### 禁止出现空块语句或空函数，除非添加一个注释。
[no-empty](http://eslint.cn/docs/rules/no-empty), [no-empty-function](http://eslint.cn/docs/rules/no-empty-function)

``` javascript
// ✗ bad
if (cond) {
}
while (cond) { }

// ✓ good
if (cond) {
    // TODO
}
while (cond) { /* TODO */ }

// ✗ bad
function foo() {}
const foo = function () {};
const foo = () => {};

// ✓ good
function foo() { /* noop */ }
const foo = function () { /* noop */ };
const foo = () => { /* noop */ };
```

## 块
#### 要求大括号风格使用：`1tbs`(one true brace style)格式，允许单行模式。🔧
[brace-style](http://eslint.cn/docs/rules/brace-style)

``` javascript
// ✗ bad
function foo()
{
    return true;
}

if (foo) {
    bar();
}
else {
    baz();
}

try
{
    somethingRisky();
} catch(e)
{
    handleError();
}

// ✓ good
function foo() {
    return true;
}

if (foo) {
    bar();
} else {
    baz();
}

try {
    somethingRisky();
} catch(e) {
    handleError();
}

function func() { return true; }
if (foo) { bar(); }
```

#### 要求遵循大括号约定：`multi-or-nest`方式，多行时使用大括号，单行时省略大括号。🔧
[curly](http://eslint.cn/docs/rules/curly)

``` javascript
// ✗ bad
if (!obj)
    obj = {
        id: 1,
        name: 'alice',
    };

while (cond)
    if (cond2)
        doSomething();
    else
        doSomethingElse();
if (foo) {
    foo++;
}

while (cond) {
    doSomething();
}

for (let i = 0; i < count; i++) {
    doSomething();
}

// ✓ good
if (!obj) {
    obj = {
        id: 1,
        name: 'alice',
    };
}

while (cond) {
    if (cond2)
        doSomething();
    else
        doSomethingElse();
}

if (foo)
    foo++;

while (cond)
    doSomething();

for (let i = 0; i < count; i++)
    doSomething();
```

## 分号和逗号
#### 强制使用分号，禁止多余的分号。🔧
[semi](http://eslint.cn/docs/rules/semi), [no-extra-semi](http://eslint.cn/docs/rules/no-extra-semi), [no-unexpected-multiline](http://eslint.cn/docs/rules/no-unexpected-multiline)

``` javascript
// ✗ bad
(function () {
    const name = 'Skywalker'
    return name;;
})()

// ✓ good
(function () {
    const name = 'Skywalker';
    return name;
})();
```

#### 禁止使用行首逗号。🔧
[comma-style](http://eslint.cn/docs/rules/comma-style)

``` javascript
// ✗ bad
const story = [
    once
  , upon
  , aTime
];

// ✓ good
const story = [
    once,
    upon,
    aTime,
];
```

#### 禁止使用逗号操作符。
[no-sequences](http://eslint.cn/docs/rules/no-sequences)

``` javascript
// ✗ bad
foo = doSomething(), val;
if (doSomething(), !!test);
while (val = foo(), val < 42);

// ✓ good
doSomething();
foo = val;
if (!!test);
while ((val = foo()) < 42);
```

#### 要求多行使用拖尾逗号，禁止单行使用拖尾逗号。🔧
[comma-dangle](http://eslint.cn/docs/rules/comma-dangle)

> 这会使git diffs更简洁，使编辑器的上下移动快捷键更方便。不用担心IE8会报错，Babel等编译器会自动去除拖尾逗号。
> ``` javascript
> // ✗ bad - git diff without trailing comma
> const hero = {
>      firstName: 'Florence',
> -    lastName: 'Nightingale'
> +    lastName: 'Nightingale',
> +    inventorOf: ['coxcomb chart', 'modern nursing']
> };
>
> // ✓ good - git diff with trailing comma
> const hero = {
>      firstName: 'Florence',
>      lastName: 'Nightingale',
> +    inventorOf: ['coxcomb chart', 'modern nursing'],
> };
> ```

``` javascript
// ✗ bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};
const heroes = [
  'Batman',
  'Superman'
];

// ✓ good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};
const heroes = [
  'Batman',
  'Superman',
];

// ✗ bad
const hero = { firstName, lastName, };
const arr = [1, 2, 3, ];

// ✓ good
const hero = { firstName, lastName };
const arr = [1, 2, 3];
```

## 字符串
#### 要求使用单引号包裹字符串，在需要插值或换行时才使用反引号，在内部单引号需要转义时才使用双引号。🔧
[quotes](http://eslint.cn/docs/rules/quotes)

``` javascript
// ✗ bad
const hello = "Hello, Bob!";
const element = `<div class="box"></div>`;
const message = 'I don\'t like quotes.';

// ✓ good
const hello = 'Hello, Bob!';
const element = `<div class="${className}"></div>`;
const message = "I don't like quotes.";
```

#### 禁止不必要的字符拼接。
[no-useless-concat](http://eslint.cn/docs/rules/no-useless-concat)

``` javascript
// ✗ bad
const a = 'some' + 'string';
const a = '1' + '0';

// ✓ good
const c = 'somestring';
const a = '10';
```

#### 禁止使用不必要的转义符。
[no-useless-escape](http://eslint.cn/docs/rules/no-useless-escape)

``` javascript
// ✗ bad
const foo = '\"This\" \i\s \'quoted\'';

// ✓ good
const foo = '"This" is \'quoted\'';
const foo = `"This" is 'quoted'`;
```

#### 禁止使用多行字符串。
[no-multi-str](http://eslint.cn/docs/rules/no-multi-str)

``` javascript
// ✗ bad
const message = 'Hello \
                 world';
// ✓ good
const message = `Hello
                world`;
```

#### 尽量使用模板字符串，禁止在模板字符串的大括号周围加空格。🔧
[prefer-template](http://eslint.cn/docs/rules/prefer-template), [template-curly-spacing](http://eslint.cn/docs/rules/template-curly-spacing)

``` javascript
// ✗ bad
return 'How are you, ' + name + '?';
return ['How are you, ', name, '?'].join();
return `How are you, ${ name }?`;

// ✓ good
return `How are you, ${name}?`;
```

## 对象和属性
#### 要求点操作符和属性放在同一行。🔧
[dot-location](http://eslint.cn/docs/rules/dot-location)

``` javascript
// ✗ bad
$('#items').
    find('.selected').
    highlight().
    end().
    find('.open').
    updateCount();

// ✓ good
$('#items')
    .find('.selected')
    .highlight()
    .end()
    .find('.open')
    .updateCount();
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// ✗ bad
const p = promise.
    then(function() {
        // code
    }).
    catch(function() {
        // code
    });

// ✓ good
const p = promise.then(function() {
    // code
}).catch(function() {
    // code
});
```

#### 要求尽可能使用点号，且不回避关键字。🔧
[dot-notation](http://eslint.cn/docs/rules/dot-notation)

``` javascript
// ✗ bad
const result = luke['jedi'];

// ✓ good
const result = luke.jedi;
const result = luke.class;
const result = luke[key];
```

#### 禁止使用不必要的计算属性。🔧
[no-useless-computed-key](http://eslint.cn/docs/rules/no-useless-computed-key)

``` javascript
// ✗ bad
const user = { ['name']: 'John Doe' };
// ✓ good
const user = { name: 'John Doe' };
```

#### 要求使用对象属性的简写语法。🔧
[object-shorthand](http://eslint.cn/docs/rules/object-shorthand)

``` javascript
// ✗ bad
const atom = {
    value: value,
    add: function (value) {
        return atom.value + value;
    },
};

// ✓ good
const atom = {
    value,
    add(value) {
        return atom.value + value;
    },
};
```

#### 要求只给对象中需要的属性名加引号。🔧
[quote-props](http://eslint.cn/docs/rules/quote-props)

``` javascript
// ✗ bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// ✓ good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```

## 运算符
#### 强制使用`===`和`==`，禁止使用`==`和`!=`。
[eqeqeq](http://eslint.cn/docs/rules/eqeqeq)

> 该规则旨在消除非类型安全的相等操作符。例如以下语句均被认为是`true`：
> - `[] == false`
> - `[] == ![]`
> - `3 == "03"`

``` javascript
// ✗ bad
if (a == b)
if (foo == true)
if (bananas != 1)
if (value == undefined)
if (typeof foo == 'undefined')
if ('hello' != 'world')
if (0 == 0)
if (true == true)
if (foo == null)

// ✓ good
if (a === b)
if (foo === true)
if (bananas !== 1)
if (value === undefined)
if (typeof foo === 'undefined')
if ('hello' !== 'world')
if (0 === 0)
if (true === true)
if (foo === null)
```

#### 禁止出现Yoda条件，除非是在范围中使用。🔧
[yoda](http://eslint.cn/docs/rules/yoda)

``` javascript
// ✗ bad
if ('red' === color)
if (true == flag)
if (-1 < str.indexOf(substr))

// ✓ good
if (color === 'red')
if (flag)
if (0 <= x && x < 1)
```

#### 要求把换行符放在运算符的前面。
[operator-linebreak](http://eslint.cn/docs/rules/operator-linebreak)

``` javascript
// ✗ bad
let fullHeight = borderTop +
                 innerHeight +
                 borderBottom;
if (someCodition ||
    otherCondition) {
        // ...
}

// ✓ good
let fullHeight = borderTop
               + innerHeight
               + borderBottom;
if (someCodition
    || otherCondition) {
       // ...
}
```

## 条件
#### 禁止在条件中使用常量表达式。
[no-constant-condition](http://eslint.cn/docs/rules/no-constant-condition)

``` javascript
// ✗ bad
if (true) { /* ... */ }
while (x = -1) { /* ... */ }
let result = 0 ? a : b;

// ✓ good
if (x === 0) { /* ... */ }
while (x) { /* ... */ }
let result = x !== 0 ? a : b;
```

#### 禁止在条件中出现赋值操作符，除非它们被括号包裹起来。
[no-cond-assign](http://eslint.cn/docs/rules/no-cond-assign)

``` javascript
// ✗ bad
if (count = 0) { /* code */ }
while (node = node.parentNode) { /* code */ }

// ✓ good
if (count === 0) { /* code */ }
while ((node = node.parentNode)) { /* code */ }
```

#### 禁止不必要的布尔类型转换。
[no-extra-boolean-cast](http://eslint.cn/docs/rules/no-extra-boolean-cast)

``` javascript
// ✗ bad
let result = !!x ? a : b;
if (!!obj) {
    // ...
}
while (Boolean(obj)) {
    // ...
}

// ✓ good
let result = x ? a : b;
if (obj) {
    // ...
}
while (obj) {
    // ...
}
```

#### 禁止不必要的三元表达式。
[no-unneeded-ternary](http://eslint.cn/docs/rules/no-unneeded-ternary)

``` javascript
// ✗ bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
const bazz = num > 1 ? true : false;

// ✓ good
const foo = a || b;
const bar = !!c;
const baz = !c;
const bazz = num > 1;
```

#### 禁止多行和嵌套的三元表达式。
[no-nested-ternary](http://eslint.cn/docs/rules/no-nested-ternary), [multiline-ternary](http://eslint.cn/docs/rules/multiline-ternary)

> 会使代码难以理解，请使用`if`语句。

``` javascript
// ✗ bad
let location = env.development
  ? 'localhost'
  : 'www.api.com';

// ✓ good
let location = env.development ? 'localhost' : 'www.api.com';

// ✗ bad
let thing = foo ? bar : baz === qux ? quxx : foobar;

// ✓ good
let thing;
if (foo)
    thing = bar;
else
    thing = baz === qux ? quxx : foobar;
```

#### 尽量不使用否定表达式。
[no-negated-condition](http://eslint.cn/docs/rules/no-negated-condition)

``` javascript
// ✗ bad
if (!condition)
    doSomething();
else
    doSomethingElse();

if (a !== b)
    doSomething();
else
    doSomethingElse();

// ✓ good
if (condition)
    doSomething();
else
    doSomethingElse();

if (a === b)
    doSomething();
else
    doSomethingElse();
```

#### 禁止不安全的否定表达式。🔧
[no-unsafe-negation](http://eslint.cn/docs/rules/no-unsafe-negation)

``` javascript
// ✗ bad
if (!key in obj) { /* code */ }
if (!obj instanceof Person) { /* code */ }

// ✓ good
if (!(key in obj)) { /* code */ }
if (!(obj instanceof Person)) { /* code */ }
if (('' + !key) in object) {/* code */ }
```

## 变量和作用域
#### 要求声明变量优先使用`const`，需要改变时使用`let`，禁止使用`var`或不声明变量。
[no-undef](http://eslint.cn/docs/rules/no-undef), [prefer-const](http://eslint.cn/docs/rules/prefer-const), [no-var](http://eslint.cn/docs/rules/no-var)

``` javascript
// ✗ bad
hero = new Hero();
var hero = new Hero();

// ✓ good
const hero = new Hero();
```

#### 禁止用一个`const`或`let`声明多个变量，优先将`const`排列在`let`之前。
[one-var](http://eslint.cn/docs/rules/one-var)

``` javascript
// ✗ bad
const bar = true,
    num = 20,
    items = getItems();
let index = 0,
    silent = false,
    hero = new Hero();

// ✗ bad
const bar = true;
let silent = false;
let index = 0;
const num = 20;
const items = getItems();
let hero = new Hero();

// ✓ good
const bar = true;
const num = 20;
const items = getItems();
let index = 0;
let silent = false;
let hero = new Hero();
```

#### 禁止初始化变量值为`undefined`。🔧
[no-undef-init](http://eslint.cn/docs/rules/no-undef-init)

``` javascript
// ✗ bad
let bar = undefined;

// ✓ good
let bar;
const baz = undefined;
```

#### 禁止给`const`赋值，禁止重复声明。
[no-const-assign](http://eslint.cn/docs/rules/no-const-assign), [no-redeclare](http://eslint.cn/docs/rules/no-redeclare)

``` javascript
// ✗ bad
const score = 100;
score = 125;
let name = 'John';
let name = 'Jane';

// ✓ good
let score = 100;
score = 125;
let name = 'John';
name = 'Jane';
```

#### 禁止删除变量。
[no-delete-var](http://eslint.cn/docs/rules/no-delete-var)

> `delete`只用于删除属性。

``` javascript
// ✗ bad
let x;
delete x;

// ✓ good
delete obj.x;
```

#### 禁止定义前使用。
[no-use-before-define](http://eslint.cn/docs/rules/no-use-before-define)

``` javascript
// ✗ bad
alert(a);
const a = 10;

f();
function f() {}

function g() {
    return b;
}
const b = 1;

// ✓ good
const a = 10;
alert(a);

function f() {}
f(1);

const b = 1;
function g() {
    return b;
}
```

#### 尽量使用已经声明的变量。
[no-unused-vars](http://eslint.cn/docs/rules/no-unused-vars)

``` javascript
// ✗ bad
function func() {
    let result = something();
}
```

## 命名
#### 要求变量、对象和函数使用小驼峰命名。
[camelcase](http://eslint.cn/docs/rules/camelcase)

``` javascript
// ✗ bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// ✓ good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

#### 要求构造器和类使用大驼峰命名。
[new-cap](http://eslint.cn/docs/rules/new-cap)

``` javascript
// ✗ bad
function user(options) {
    this.name = options.name;
}
const bad = new user({
    name: 'nope',
});

// ✓ good
class User {
    constructor(options) {
        this.name = options.name;
    }
}
const good = new User({
    name: 'yup',
});
```

#### 要求首个缩写单词中的每个字母具有相同的大小写形式。

> 命名是为了可读性，而不是为了机械地去贴近一个算法。

``` javascript
// ✗ bad
import SmsContainer from './containers/SmsContainer';

// ✗ bad
const HttpRequests = [
  // ...
];

// ✓ good
import SMSContainer from './containers/SMSContainer';

// ✓ good
const HTTPRequests = [
  // ...
];
```


## 类型
#### 禁止对`String`、`Number`、`Boolean`、`Symbol`、`Array`、`Object`、`Function`使用new操作符。
[no-new-wrappers](http://eslint.cn/docs/rules/no-new-wrappers), [no-new-symbol](http://eslint.cn/docs/rules/no-new-symbol), [no-array-constructor](http://eslint.cn/docs/rules/no-array-constructor), [no-new-object](http://eslint.cn/docs/rules/no-new-object), [no-new-func](http://eslint.cn/docs/rules/no-new-func)

``` javascript
// ✗ bad
const str = new String('Hello world');
const num = new Number(33);
const bool = new Boolean(false);
const sym = new Symbol('sym');
const arr = new Array();
const obj = new Object();
const func = new Function('a', 'b', 'return a + b');

// ✓ good
const str = String(value);
const num = Number(value);
const bool = Boolean(value);
const sym = Symbol('sym');
const arr = [];
const obj = {};
const func = (a, b) => a + b;
```

#### 要求调用无参构造函数时有小括号。
[new-parens](http://eslint.cn/docs/rules/new-parens)

``` javascript
// ✗ bad
const date = new Date
const dog = new Animal;

// ✓ good
const date = new Date();
const dog = new Animal();
```

#### 强制`typeof`表达式与有效的字符串进行比较。
[valid-typeof](http://eslint.cn/docs/rules/valid-typeof)

``` javascript
// ✗ bad
typeof x === 'strnig';
typeof x === 'undefimed';
typeof x === 'nunber';
typeof x === 'fucntion';

// ✓ good
typeof x === 'string';
typeof x === 'undefined';
typeof x === type;
typeof x === typeof y;
```

#### 尽量使用较短的符号实现类型转换。
[no-implicit-coercion](http://eslint.cn/docs/rules/no-implicit-coercion)

``` javascript
// ✗ bad
let b = Boolean(foo);
let b = foo.indexOf('.') !== -1;
let n = Number(foo);
let s = String(foo);
foo = String(foo);

// ✓ good
let b = !!foo;
let b = ~foo.indexOf('.');
let n = +foo;
let s = '' + foo;
foo += '';
```

#### 要求`Symbol`必须要有描述。
[symbol-description](http://eslint.cn/docs/rules/symbol-description)

``` javascript
// ✗ bad
const foo = Symbol();

// ✓ good
const foo = Symbol('a symbol');
```

## 数字
#### 要求书写完整的浮点小数。
[no-floating-decimal](http://eslint.cn/docs/rules/no-floating-decimal)

``` javascript
// ✗ bad
let num = .5;
let num = 2.;
let num = -.7;

// ✓ good
let num = 0.5;
let num = 2.0;
let num = -0.7;
```

#### 要求调用`isNaN()`检查`NaN`。
[use-isnan](http://eslint.cn/docs/rules/use-isnan)

``` javascript
// ✗ bad
if (num === NaN) { /* ... */ }

// ✓ good
if (isNaN(num)) { /* ... */ }
```

## 函数和箭头函数
#### 要求使用函数表达式，而不是函数声明。
[func-style](http://eslint.cn/docs/rules/func-style), [no-inner-declarations](http://eslint.cn/docs/rules/no-inner-declarations), [no-func-assign](http://eslint.cn/docs/rules/no-func-assign)

> 函数声明很容易被提升到当前作用域的顶部，这意味着可以把调用它的语句放在函数声明之前。

``` javascript
// ✗ bad
function foo() {
  // ...
}

// ✓ good
const foo = function () {
    // ...
}
const foo = () => { /* ... */ }
```

#### 禁止不必要的`return`。
[no-useless-return](http://eslint.cn/docs/rules/no-useless-return)

``` javascript
// ✗ bad
function foo() { return; }
function foo() {
    doSomething();
    return;
}

// ✓ good
function foo() { return 5; }
function foo() {
    return doSomething();
}
```

#### 要求使用内包型立即函数（IIFE）。🔧
[wrap-iife](http://eslint.cn/docs/rules/wrap-iife)

``` javascript
// ✗ bad
function () {
    console.log('Hello');
}();
(function () {
    console.log('Hello');
}());

// ✓ good
(function () {
    console.log('Hello');
})();
```

#### 禁止使用`arguments`，用`...`代替。
[prefer-rest-params](http://eslint.cn/docs/rules/prefer-rest-params)

``` javascript
// ✗ bad
function joinAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}

// ✓ good
function joinAll(...args) {
    return args.join('');
}
```

#### 要求使用扩展运算符，而不是`.apply()`。🔧
[prefer-spread](http://eslint.cn/docs/rules/prefer-spread)

``` javascript
// ✗ bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// ✓ good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// ✗ bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// ✓ good
new Date(...[2016, 8, 5]);
```

#### 禁用不必要的`.call()`和`.apply()`。
[no-useless-call](http://eslint.cn/docs/rules/no-useless-call)

``` javascript
// ✗ bad
// These are same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);
// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);

// ✓ good
foo(1, 2, 3);
obj.foo(1, 2, 3):
```

#### 尽量使用默认值参数语法，而不是手动设置默认值。并且尽量将默认值参数放在最后。
``` javascript
// ✗ bad
function handle(options) {
    options = options || {};
    // ...
}

// ✓ good
function handle(options = {}) {
    // ...
}

// ✗ bad
function handle(options = {}, name) {
    // ...
}

// ✓ good
function handle(name, options = {}) {
    // ...
}
```

#### 禁止使用`caller`或`callee`。
[no-caller](http://eslint.cn/docs/rules/no-caller)

> `arguments.caller`和`arguments.callee`，在JavaScript的新版本中它们已被弃用，同时在 ECMAScript 5的严格模式下，它们也是被禁用的。

``` javascript
// ✗ bad
function factorial(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
}

// ✓ good
function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}
```

#### 要求尽量使用箭头函数。
[prefer-arrow-callback](http://eslint.cn/docs/rules/prefer-arrow-callback)

``` javascript
// ✗ bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
});

// ✓ good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
```

#### 要求箭头函数参数必须使用括号。
[arrow-parens](http://eslint.cn/docs/rules/arrow-parens)

``` javascript
// ✗ bad
[1, 2, 3].map(number => `A string containing the ${number}.`);

// ✓ good
[1, 2, 3].map((number) => `A string containing the ${number}.`);
```

#### 要求尽量使用箭头函数的简写形式。
[arrow-body-style](http://eslint.cn/docs/rules/arrow-body-style)

``` javascript
// ✗ bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// ✓ good
[1, 2, 3].map(number => `A string containing the ${number}.`);
```

#### 禁止不必要的函数绑定。
[no-extra-bind](http://eslint.cn/docs/rules/no-extra-bind)

``` javascript
// ✗ bad
const x = function () {
    foo();
}.bind(bar);
const x = (() => {
    foo();
}).bind(bar);
const x = (() => {
    this.foo();
}).bind(bar);
const x = function () {
    (function () {
        this.foo();
    }());
}.bind(bar);
const x = function () {
    function foo() {
        this.bar();
    }
}.bind(baz);

// ✓ good
const x = function () {
    this.foo();
}.bind(bar);
const x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

#### 如果要引用`this`，要求统一使用`self`单词。
[consistent-this](http://eslint.cn/docs/rules/consistent-this)

``` javascript
// ✗ bad
function foo() {
    const that = this;
    return function () {
        console.log(that);
    };
}

// ✓ good
function foo() {
    const self = this;
    return function () {
        console.log(self);
    };
}

// ✓ best
function foo() {
    return () => console.log(self);
}
```

#### 要求数组方法的回调函数中有`return`语句。
[array-callback-return](http://eslint.cn/docs/rules/array-callback-return)

> 该规则发现以下方法的回调函数，然后检查return语句的使用。
> - `Array.from`
> - `Array.prototype.every`
> - `Array.prototype.filter`
> - `Array.prototype.find`
> - `Array.prototype.findIndex`
> - `Array.prototype.map`
> - `Array.prototype.reduce`
> - `Array.prototype.reduceRight`
> - `Array.prototype.some`
> - `Array.prototype.sort`

``` javascript
// ✓ good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});

// ✓ good
[1, 2, 3].map((x) => x + 1);

// ✗ bad
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
});

// ✓ good
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
    return flatten;
});

// ✗ bad
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird')
        return author === 'Harper Lee';
    else
        return false;
});

// ✓ good
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird')
        return author === 'Harper Lee';
    return false;
});
```

## 类和构造器
#### 要求尽量使用`class`，避免手动操作`prototype`。
``` javascript
// ✗ bad
function Queue(contents = []) {
    this.queue = [...contents];
}
Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
};

// ✓ good
class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}
```

#### 要求使用`extends`做继承。
``` javascript
// ✗ bad
const inherits = require('inherits');
function PeekableQueue(contents) {
    Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
    return this.queue[0];
};

// ✓ good
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}
```

#### 禁止在`class`中添加不必要的构造函数。
[no-useless-constructor](http://eslint.cn/docs/rules/no-useless-constructor)

``` javascript
// ✗ bad
class Jedi {
    constructor() {}

    getName() {
        return this.name;
    }
}

// ✗ bad
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
    }
}

// ✓ good
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
        this.name = 'Rey';
    }
}
```

#### 要求在构造函数中有`super()`调用，禁止在调用`super()`之前使用`this`。
[constructor-super](http://eslint.cn/docs/rules/constructor-super), [no-this-before-super](http://eslint.cn/docs/rules/no-this-before-super)

``` javascript
// ✗ bad
class Dog extends Animal {
    constructor () {
        this.legs = 4;
    }
}

// ✗ bad
class Dog extends Animal {
    constructor () {
        this.legs = 4;
        super();
    }
}

// ✓ good
class Dog extends Animal {
    constructor () {
        super();
        this.legs = 4;
    }
}
```

## 正则表达式
#### 尽量不要在正则表达式字面量中出现多个空格。
[no-regex-spaces](http://eslint.cn/docs/rules/no-regex-spaces)

``` javascript
// ✗ bad
const reg = /abc   def/;

// ✓ good
const reg = /abc {3}def/;
```

#### 禁止出现非法正则表达式。
[no-invalid-regexp](http://eslint.cn/docs/rules/no-invalid-regexp)

``` javascript
// ✗ bad
RegExp('[a-z');

// ✓ good
RegExp('[a-z]');
```

#### 禁止在正则表达式中出现空字符集。
[no-empty-character-class](http://eslint.cn/docs/rules/no-empty-character-class)

``` javascript
// ✗ bad
/^abc[]/.test('abcdefg');

// ✓ good
/^abc[a-z]/.test('abcdefg');
```

#### 禁止在正则表达式中出现控制字符。
[no-control-regex](http://eslint.cn/docs/rules/no-control-regex)

``` javascript
// ✗ bad
const pattern = /\x1f/;

// ✓ good
const pattern = /\x20/;
```

## 低级错误
#### 禁止自身赋值或比较。
[no-self-assign](http://eslint.cn/docs/rules/no-self-assign), [no-self-compare](http://eslint.cn/docs/rules/no-self-compare)

``` javascript
// ✗ bad
foo = foo;
[a, b] = [a, b];

// ✗ bad
let x = 10;
if (x === x)
    x = 20;
```

#### 禁止对原生对象、关键字赋值。
[no-global-assign](http://eslint.cn/docs/rules/no-global-assign), [no-shadow-restricted-names](http://eslint.cn/docs/rules/no-shadow-restricted-names)

``` javascript
// ✗ bad
Object = null;
undefined = 1;
window = {};
function NaN() {}
try {} catch(eval) {}
```

#### 禁止对类进行赋值。
[no-class-assign](http://eslint.cn/docs/rules/no-class-assign)

``` javascript
// ✗ bad
class Dog {}
Dog = 'Fido';
```

#### 禁止将全局对象当作函数进行调用。
[no-obj-calls](http://eslint.cn/docs/rules/no-obj-calls)

``` javascript
// ✗ bad
let math = Math();
const json = JSON();
```

#### 禁止出现重复的函数参数、对象属性、类成员方法、case标签以及imports。
[no-dupe-args](http://eslint.cn/docs/rules/no-dupe-args), [no-dupe-keys](http://eslint.cn/docs/rules/no-dupe-keys), [no-dupe-class-members](http://eslint.cn/docs/rules/no-dupe-class-members), [no-duplicate-case](http://eslint.cn/docs/rules/no-duplicate-case), [no-duplicate-imports](http://eslint.cn/docs/rules/no-duplicate-imports)

``` javascript
// ✗ bad
function foo(a, b, a) {
    console.log(a, b);
}

// ✗ bad
const obj = {
    name: 'alice',
    name: 'bob',
    'name': 'carol',
};

// ✗ bad
class Dog {
    bark () {}
    bark () {}
}

// ✗ bad
switch (id) {
    case 1:
    // ...
    case 1:
}

// ✗ bad
import { myFunc1 } from 'module';
import { myFunc2 } from 'module';
```

#### 禁止未使用过的表达式。
[no-unused-expressions](http://eslint.cn/docs/rules/no-unused-expressions)

``` javascript
// ✗ bad
0
if(0) 0
{0}
f(0), {}
(function anIncompleteIIFE () {});
a && b
a ? b : 0

// ✓ good
a = 0
new C()
delete a.b
void a
a && b()
a ? b() : c()
```

## 其他
#### 禁止使用`eval`以及类似`eval`的方法。
[eval](http://eslint.cn/docs/rules/eval), [no-implied-eval](http://eslint.cn/docs/rules/no-implied-eval), [no-script-url](http://eslint.cn/docs/rules/no-script-url)

``` javascript
// ✗ bad
let value = eval('obj.' + key);
setTimeout('alert("Hi!");', 100);
setInterval('alert("Hi!");', 100);
execScript('alert("Hi!")');
location.href = 'javascript:void(0)';

// ✓ good
let value = obj[key];
setTimeout(function() {
    alert('Hi!');
}, 100);
setInterval(function() {
    alert('Hi!');
}, 100);
alert('Hi!');
```

#### 禁止使用`void`, `with`, `label`, `__iterator__`, `__proto__`
[no-void](http://eslint.cn/docs/rules/no-void), [no-with](http://eslint.cn/docs/rules/no-with), [no-labels](http://eslint.cn/docs/rules/no-labels), [no-unused-labels](http://eslint.cn/docs/rules/no-unused-labels), [no-extra-label](http://eslint.cn/docs/rules/no-extra-label), [no-label-var](http://eslint.cn/docs/rules/no-label-var), [no-iterator](http://eslint.cn/docs/rules/no-iterator), [no-proto]

#### 要求抛出异常必须用`Error`。
[no-throw-literal](http://eslint.cn/docs/rules/no-throw-literal)

``` javascript
// ✗ bad
throw 'error';
throw 0;
throw undefined;
throw null;

// ✓ good
throw new Error();
throw new Error('error');
const e = new Error('error');
throw e;
```

#### 禁止使用空解构模式。
[no-empty-pattern](http://eslint.cn/docs/rules/no-empty-pattern)

``` javascript
// ✗ bad
const {} = foo;
const [] = foo;
const {a: {}} = foo;
const {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}

// ✓ good
const {a = {}} = foo;
const {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}
```

## 注释
#### 要求多行注释使用`/** ... */`。

``` javascript
// ✗ bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
    // ...
    return element;
}

// ✓ good
/**
 * make() returns a new element
 * based on the passed-in tag name

 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
    // ...
    return element;
}
```

#### 要求单行注释使用`//`，尽量将单行注释放在代码上方，要求在单行注释前放一个空行，除非它是块中的首行。
``` javascript
// ✗ bad
const active = true;  // is current tab

// ✓ good
// is current tab
const active = true;

// ✗ bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// ✓ good
function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// ✓ good
function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}
```

#### 要求注释的符号和内容之间有一个空格。🔧
[spaced-comment](http://eslint.cn/docs/rules/spaced-comment)

``` javascript
// ✗ bad
//is current tab
const active = true;

// ✓ good
// is current tab
const active = true;

// ✗ bad
/**
*make() returns a new element
*based on the passed-in tag name
*/
function make(tag) {

    // ...

    return element;
}

// ✓ good
/**
* make() returns a new element
* based on the passed-in tag name
*/
function make(tag) {

    // ...

    return element;
}
```

#### 要求使用`FIXME`标注一个问题，使用`TODO`标注一个计划。
``` javascript
// ✓ good
class Calculator extends Abacus {
    constructor() {
        super();

        // FIXME: shouldn't use a global here
        total = 0;
    }
}

class Calculator extends Abacus {
    constructor() {
        super();

        // TODO: total should be configurable by an options param
        this.total = 0;
    }
}
```

## 生产环境
#### 不推荐使用`alert`、`confirm`、`prompt`。
[no-alert](http://eslint.cn/docs/rules/no-alert)

``` javascript
// ✗ bad
alert('message');
confirm('Are you sure?');
```

#### 在生产环境禁止出现`console.log`和`debugger`，允许出现`console.warn`和`console.error`。
[no-console](http://eslint.cn/docs/rules/no-console), [no-debugger](http://eslint.cn/docs/rules/no-debugger)

``` javascript
// ✗ bad
console.log('code info.');
debugger;

// ✓ good
console.warn('This method is deprecated.');
console.error('Circular dependencies!')
```

## 参考

- [Airbnb JavaScript Style Guild](http://airbnb.io/javascript/)
- [JavaScript Standard Style](https://github.com/feross/standard/blob/master/RULES.md)

<!-- ## TODO
    #### 3.2
    #### 3.7
    #### 3.8
    #### 5.*
    #### 6.2
    #### 7.3
    #### 7.12
    #### 7.13
    #### 7.15
    #### 10.*
    #### 11.*
    #### 13.4
    #### 15.5
    #### 21.*
    #### 18.7
    #### 22.4
    #### 22.6
    #### 23.*
    #### 24.*
    #### 25.* -->
<!--
    'prefer-numeric-literals': [2],
    'no-useless-rename': [2],
    'no-await-in-loop': [2],
    'no-control-regex': [2],
    'no-ex-assign': [2],
    'no-new-require': [2],
    'no-invalid-regexp': [2],
    'no-irregular-whitespace': [2],
    'no-sparse-arrays': [1],
    'no-unexpected-multiline': [2],
    'no-unreachable': [2],
    'no-unsafe-finally': [2],
    'block-scoped-var': [2],
    'no-case-declarations': [2],
    'no-div-regex': [2],
    'no-eq-null': [2],
    'no-octal-escape': [2],
    'no-octal': [2],
    'no-return-await': [2],
    'no-unmodified-loop-condition': [1],
    'radix': [2, 'as-needed'],
    'require-await': [2],
    'no-catch-shadow': [2],
    'func-name-matching': [2],
    'template-tag-spacing': [2, 'always'],
-->
