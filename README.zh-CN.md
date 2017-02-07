Loose

## Possible Errors
这些规则与 JavaScript 代码中可能的错误或逻辑错误有关。

### no-cond-assign
禁止在条件语句中出现赋值操作符，除非它们被括号括起来。

``` javascript
// ✗ avoid
if (x = 0) { /* code */ }
while (node = node.parentNode) { /* code */ }

// ✓ ok
if (x === 0) { /* code */ }
while ((node = node.parentNode)) { /* code */ }
```

### no-constant-condition
禁止在条件中使用常量表达式。

``` javascript
// ✗ avoid
if (true) { /* code */ }
while (x = -1) { /* code */ }
var result = 0 ? a : b;

// ✓ ok
if (x === 0) { /* code */ }
while (x) { /* code */ }
var result = x !== 0 ? a : b;
```

### no-control-regex
略。

### no-dupe-args
禁止在 function 定义中出现重复的参数。

``` javascript
// ✗ avoid
function say(a, b, a) {
    console.log(a, b);
}

// ✓ ok
function say(a, b, c) {
    console.log(a, b, c);
}
```

### no-dupe-keys
禁止在对象字面量中出现重复的键。

``` javascript
// ✗ avoid
var obj = {
    name: 'alice',
    name: 'bob',
    'name': 'carol',
};

// ✓ ok
var obj = {
    name: 'alice',
    alias: 'bob',
};
```

### no-duplicate-case
禁止重复 case 标签。
略。

### no-empty-character-class
禁止在正则表达式中出现空字符集。

``` javascript
// ✗ avoid
/^abc[]/.test('abcdefg');

// ✓ ok
/^abc[a-z]/.test('abcdefg');
```

### no-empty
不建议出现空块语句，除非添加一个注释。

``` javascript
// ✗ avoid
if (cond) {
}
while (cond) { }

// ✓ ok
if (cond) {
    // empty
}
while (cond) { /* empty */ }
```

### no-ex-assign
略。

### no-extra-boolean-cast
禁止不必要的布尔类型转换。

``` javascript
// ✗ avoid
var result = !!!x;
var result = !!x ? a : b;
if (!!obj) {
    // code
}
while (Boolean(obj)) {
    // code
}

// ✓ ok
var result = !x;
var result = x ? a : b;
var result = !!(x ? a : b);
if (obj) {
    // code
}
while (obj) {
    // code
}
```

### no-extra-semi 🔧
禁止冗余的括号。

``` javascript
// ✗ avoid
var x = 5;;
function say() {
    // code
};

// ✓ ok
var x = 5;
var foo = function () {
    // code
};
```

### no-func-assign
### no-invalid-regexp
### no-irregular-whitespace
### no-obj-calls
略。

### no-regex-spaces
不建议在正则表达式字面量中出现多个空格。

``` javascript
// ✗ avoid
var reg = /abc   def/;

// ✓ ok
var reg = /abc {3}def/;
```

### no-unexpected-multiline
### no-unreachable
### no-unsafe-finally
略。

### no-unsafe-negation 🔧
禁止不安全的否定表达式。

``` javascript
// ✗ avoid
if (!key in obj) { /* code */ }
if (!obj instanceof Person) { /* code */ }

// ✓ ok
if (!(key in obj)) { /* code */ }
if (!(obj instanceof Person)) { /* code */ }
if (('' + !key) in object) {/* code */ }
```

### use-isnan
要求调用`isNaN()`检查`NaN`。

``` javascript
// ✗ avoid
if (num == NaN) { /* code */ }

// ✓ ok
if (isNaN(num)) { /* code */ }
```

### valid-typeof
强制`typeof`表达式与有效的字符串进行比较。

``` javascript
// ✗ avoid
typeof x === 'strnig';
typeof x === 'undefimed';
typeof x === 'nunber';
typeof x === 'fucntion';

// ✓ ok
typeof x === 'string';
typeof x === 'undefined';
typeof x === type;
typeof x === typeof y;
```

## Best Practices
这些规则是关于最佳实践的，帮助你避免一些问题。

### array-callback-return
强制数组方法的回调函数中有 return 语句。

该规则发现以下方法的回调函数，然后检查return语句的使用。
- `Array.from`
- `Array.prototype.every`
- `Array.prototype.filter`
- `Array.prototype.find`
- `Array.prototype.findIndex`
- `Array.prototype.map`
- `Array.prototype.reduce`
- `Array.prototype.reduceRight`
- `Array.prototype.some`
- `Array.prototype.sort`

``` javascript
// ✗ avoid
var indexMap = arr.reduce(function (memo, item, index) {
    memo[item] = index;
}, {});
var foo = Array.from(nodes, function (node) {
    if (node.tagName === 'DIV') {
        return true;
    }
});
var bar = foo.filter(function (x) {
    if (x) {
        return true;
    } else {
        return;
    }
});

// ✓ ok
var indexMap = arr.reduce(function (memo, item, index) {
    memo[item] = index;
    return memo;
}, {});
var foo = Array.from(nodes, function (node) {
    return node.tagName === 'DIV';
});
var bar = foo.map((node) => node.getAttribute('id'));
```

### block-scoped-var
略。

### curly 🔧
要求遵循大括号约定：`multi-or-nest`方式，多行时必须使用大括号，单行时必须省略大括号。

``` javascript
// ✗ avoid
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
for (var i = 0; i < count; i++) {
    doSomething();
}

// ✓ ok
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
for (var i = 0; i < count; i++)
    doSomething();
```

### dot-location 🔧
要求点操作符和属性放在同一行。

``` javascript
// ✗ avoid
var dom = $('selector').
    children().
    eq(5).
    attr('data-id', 0);
var p = promise.
    then(function() {
        // code
    }).
    catch(function() {
        // code
    });

// ✓ ok
var dom = $('selector')
    .children()
    .eq(5)
    .attr('data-id', 0);
var p = promise.then(function() {
        // code
    }).catch(function() {
        // code
    });
```

### dot-notation
强制使用点号。

``` javascript
// ✗ avoid
var x = obj['name'];

// ✓ ok
var x = obj.name;
var x = obj[key];
```

### eqeqeq
强制使用 === 和 !==。

该规则旨在消除非类型安全的相等操作符。例如以下语句被认为是`true`：
- `[] == false`
- `[] == ![]`
- `3 == "03"`

``` javascript
// ✗ avoid
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

// ✓ ok
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

### no-caller
禁用 caller 或 callee。

`arguments.caller`和`arguments.callee`，在 JavaScript 的新版本中它们已被弃用，同时在 ECMAScript 5 的严格模式下，它们也是被禁用的。

``` javascript
// ✗ avoid
function foo(n) {
    if (n <= 0) {
        return;
    }
    arguments.callee(n - 1);
}
[1,2,3,4,5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});

// ✓ ok
function foo(n) {
    if (n <= 0) {
        return;
    }
    foo(n - 1);
}
[1,2,3,4,5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

### no-case-declarations
### no-div-regex
略。

### no-empty-function
不建议出现空函数，除非添加一个注释。

``` javascript
// ✗ avoid
function foo() {}
var foo = function () {};
var foo = () => {};

// ✓ ok
function foo() { /* do nothing */ }
var foo = function () { /* do nothing */ };
var foo = () => { /* do nothing */ };
```

### no-empty-pattern
禁止使用空解构模式。

``` javascript
// ✗ avoid
var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}

// ✓ ok
var {a = {}} = foo;
var {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}
```

### no-eq-null
略。

### no-eval
不建议使用eval。

### no-extra-bind
禁止不必要的函数绑定。

``` javascript
// ✗ avoid
var x = function () {
    foo();
}.bind(bar);
var x = (() => {
    foo();
}).bind(bar);
var x = (() => {
    this.foo();
}).bind(bar);
var x = function () {
    (function () {
        this.foo();
    }());
}.bind(bar);
var x = function () {
    function foo() {
        this.bar();
    }
}.bind(baz);

// ✓ ok
var x = function () {
    this.foo();
}.bind(bar);
var x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

### no-extra-label
略。

### no-floating-decimal
规定浮点小数格式。

``` javascript
// ✗ avoid
var num = .5;
var num = 2.;
var num = -.7;

// ✓ ok
var num = 0.5;
var num = 2.0;
var num = -0.7;
```

### no-global-assign
略。

### no-implicit-coercion
优先使用较短的符号实现类型转换。

``` javascript
// ✗ avoid
var b = Boolean(foo);
var b = foo.indexOf('.') !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
foo = String(foo);

// ✓ ok
var b = !!foo;
var b = ~foo.indexOf('.');
var n = +foo;
var n = 1 * foo;
var s = '' + foo;
foo += '';
```

### no-implied-eval
禁用隐式的eval()。

``` javascript
// ✗ avoid
setTimeout('alert('Hi!');', 100);
setInterval('alert('Hi!');', 100);
execScript('alert('Hi!')');

// ✓ ok
setTimeout(function() {
    alert("Hi!");
}, 100);
setInterval(function() {
    alert("Hi!");
}, 100);
```

### no-iterator
### no-labels
略。

### no-multi-spaces 🔧
禁止出现多个空格。

``` javascript
// ✗ avoid
var a =  1;
if(foo   === 'bar') {}
a <<  b
var arr = [1,  2];
a ?  b: c

// ✓ ok
var a = 1;
if(foo === "bar") {}
a << b
var arr = [1, 2];
a ? b: c
```

### no-multi-str
### no-new-func
### no-new-wrappers
### no-octal-escape
### no-octal
### no-proto
### no-redeclare
略。

### no-script-url
禁用 Script URL

``` javascript
// ✗ avoid
location.href = 'javascript:void(0)';
```

### no-self-assign
### no-self-compare

### no-sequences
不允许使用逗号操作符。

``` javascript
// ✗ avoid
foo = doSomething(), val;
0, eval('doSomething();');
do {} while (doSomething(), !!test);
for (; doSomething(), !!test; );
if (doSomething(), !!test);
switch (val = foo(), val) {}
while (val = foo(), val < 42);

// ✓ ok
foo = (doSomething(), val);
(0, eval)('doSomething();');
do {} while ((doSomething(), !!test));
for (i = 0, j = 10; i < j; i++, j--);
if ((doSomething(), !!test));
switch ((val = foo(), val)) {}
while ((val = foo(), val < 42));
```

### no-throw-literal
限制可以被抛出的异常。

``` javascript
// ✗ avoid
throw "error";
throw 0;
throw undefined;
throw null;

// ✓ ok
throw new Error();
throw new Error('error');
var e = new Error('error');
throw e;
```

### no-unmodified-loop-condition
略。

### no-unused-expressions
禁止未使用过的表达式。

``` javascript
// ✗ avoid
0
if(0) 0
{0}
f(0), {}
(function anIncompleteIIFE () {});
a && b
a ? b : 0

// ✓ ok
a = 0
new C()
delete a.b
void a
a && b()
a ? b() : c()
```

### no-unused-labels
略。

### no-useless-call
禁用不必要的 .call() 和 .apply()

``` javascript
// ✗ avoid
// These are same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);
// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);

// ✓ ok
// The `this` binding is different.
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);
// The argument list is variadic.
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
```

### no-useless-concat
禁止没有必要的字符拼接。

``` javascript
// ✗ avoid
var a = 'some' + 'string';
var a = '1' + '0';

// ✓ ok
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var a = 'some' +
    'thing';
```

### no-useless-concat
禁用不必要的转义。

### no-useless-return
禁止不必要的return。

``` javascript
// ✗ avoid
function foo() { return; }
function foo() {
  doSomething();
  return;
}

// ✓ ok
function foo() { return 5; }
function foo() {
  return doSomething();
}
```

### no-void
禁止使用`void`操作符。

### no-with
禁用`with`语句。

### radix
略。

### wrap-iife
立即执行的函数包裹起来的方式。

``` javascript
// ✗ avoid
var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };}()); // wrapped call expression

// ✓ ok
var x = (function () { return { y: 1 };})(); // wrapped function expression
```

### yoda
禁止Yoda条件，除非是在范围中使用。

``` javascript
// ✗ avoid
if ('red' === color) { /* code */ }
if (true == flag) { /* code */ }
if (-1 < str.indexOf(substr)) { /* code */ }

// ✓ ok
if (color === 'red') { /* code */ }
if (flag) { /* code */ }
if (0 <= x && x < 1) { /* code */ }
```

## Variables
这些规则与变量声明有关。

### no-catch-shadow
略。

### no-delete-var
禁止删除变量。

``` javascript
// ✗ avoid
var x;
delete x;

// ✓ ok
delete obj.x;
```

### no-label-var
### no-shadow-restricted-names
略。

### no-undef-init 🔧
不允许初始化变量值为 undefined。

``` javascript
// ✗ avoid
var foo = undefined;
let bar = undefined;

// ✓ ok
var foo;
let bar;
const baz = undefined;
```

### no-use-before-define
禁止定义前使用。

``` javascript
// ✗ avoid
alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

// ✓ ok
var a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
    return b;
}
```

## Stylistic Issues
这些规则是关于风格指南的。

### array-bracket-spacing 🔧
禁止在数组括号边缘使用空格。

``` javascript
// ✗ avoid
var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ 'foo',
  'bar'
];

// ✓ ok
var arr = [];
var arr = ['foo', 'bar', 'baz'];
var arr = [['foo'], 'bar', 'baz'];
var arr = [
  'foo',
  'bar',
];
```

### block-spacing 🔧
强制在单行代码块中使用空格。

``` javascript
// ✗ avoid
function foo() {return true;}
if (foo) { bar = 0;}

// ✓ ok
function foo() { return true; }
if (foo) { bar = 0; }
```

### brace-style 🔧
大括号风格要求：`1tbs`(one true brace style)，允许单行模式。

``` javascript
// ✗ avoid
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

// ✓ ok
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

function nop() { return; }
if (foo) { bar(); }
```

### camelcase
要求使用骆驼拼写法。

``` javascript
// ✗ avoid
var my_favorite_color = '#112C85';
function do_something() {
    // ...
}
obj.do_something = function() {
    // ...
};
var obj = {
    my_pref: 1
};

// ✓ ok
var myFavoriteColor   = '#112C85';
var _myFavoriteColor  = '#112C85';
var myFavoriteColor_  = '#112C85';
var MY_FAVORITE_COLOR = '#112C85';
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };
```

### comma-dangle 🔧
要求多行使用拖尾逗号。

``` javascript
// ✗ avoid
var foo = {
    bar: 'baz',
    qux: 'quux'
};
var foo = { bar: 'baz', qux: 'quux', };
var arr = [1, 2, ];
var arr = [
    1,
    2
];

// ✓ ok
var foo = {
    bar: 'baz',
    qux: 'quux',
};
var foo = { bar: 'baz', qux: 'quux' };
var arr = [1, 2];
var arr = [
    1,
    2,
];
```

### comma-spacing 🔧
强制在逗号后使用空格。

``` javascript
// ✗ avoid
var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b

// ✓ ok
var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var arr = [1,, 3]
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

### computed-property-spacing 🔧
禁止在计算属性中使用空格。

``` javascript
// ✗ avoid
obj[foo ]
obj[ 'foo']
var x = {[ b ]: a}
obj[foo[ bar ]]

// ✓ ok
obj[foo]
obj['foo']
var x = {[b]: a}
obj[foo[bar]]
```

### consistent-this
要求一致的 This：`self`。

``` javascript
// ✗ avoid
var that = this;
var me = this;

// ✓ ok
var self = this;
```

### eol-last 🔧
要求文件末尾保留一行空行。

### func-call-spacing 🔧
禁止函数调用时函数名和括号之间有空格。

``` javascript
// ✗ avoid
fn ();
fn
();

// ✓ ok
fn();
```

### func-name-matching
略

### func-style
强制 function 使用表达式的方式声明。

``` javascript
// ✗ avoid
function foo() {
    // ...
}

// ✓ ok
var foo = function() {
    // ...
};
var foo = () => {};
```

### indent 🔧
强制使用4个空格缩进。

``` javascript
// ✗ avoid
if (a) {
  b = c;
  function foo(d) {
    e = f;
  }
}

// ✓ ok
if (a) {
    b = c;
    function foo(d) {
        e = f;
    }
}
```

### key-spacing 🔧
强制在对象字面量的键的冒号之后有一个空格。

``` javascript
// ✗ avoid
var obj = { foo:42 };
var obj = { foo :42 };
var obj = { foo : 42 };

// ✓ ok
var obj = { foo: 42 };
```

### keyword-spacing 🔧
强制关键字周围空格的一致性。

``` javascript
// ✗ avoid
if (foo) {
    //...
}else if (bar) {
    //...
}else {
    //...
}

// ✓ ok
if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}
```

### linebreak-style 🔧
强制使用\n换行符。

### lines-around-comment 🔧
强制注释前有一个空行。

``` javascript
// ✗ avoid
var night = "long";
/* what a great and wonderful day */
var day = "great"

// ✓ ok
var night = "long";

/* what a great and wonderful day */
var day = "great"
```
