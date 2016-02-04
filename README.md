# react-flexlayout
[![Build Status](https://img.shields.io/circleci/project/nathanmarks/react-flexlayout/master.svg?style=flat-square)](https://circleci.com/gh/nathanmarks/react-flexlayout)
[![Coverage Status](https://img.shields.io/coveralls/nathanmarks/react-flexlayout/master.svg?style=flat-square)](https://coveralls.io/github/nathanmarks/react-flexlayout?branch=master)
[![npm](https://img.shields.io/npm/v/react-flexlayout.svg?style=flat-square)]()
[![Dependency Status](https://david-dm.org/nathanmarks/react-flexlayout.svg?style=flat-square)](https://david-dm.org/nathanmarks/react-flexlayout)

#### Features

#### Installation

```bash
$ npm install react-flexlayout --save
```

#### Components

`Layout` (component)
====================

Core component for building flexbox layouts

Props
-----

### `align`

Controls child flex alignment using `justify-content` and `align-items`.
The prop accepts a string with 2 (optional) parts in the following format:

"`start|center|end|space-around|space-between` `start|center|end|stretch`"

type: `string`


### `flex`

Sets the `flex-basis`

@val {bool} true Will grow and shrink as needed. Starts with a size of 0%. Same as flex="0".
@val {string} "none" Will not grow or shrink. Sized based on it's width and height values.
@val {string} "initial"  Will shrink as needed. Starts with a size based on it's width and height values.
@val {string} "auto" Will grow and shrink as needed. Starts with a size based on it's width and height values.
@val {string} "grow" Will grow and shrink as needed. Starts with a size of 100%. Same as flex="100".
@val {string} "nogrow" Will shrink as needed, but won't grow. Starts with a size based on it's width and height values.
@val {string} "noshrink" Will grow as needed, but won't shrink. Starts with a size based on it's width and height values.

type: `union(bool|number|string)`


### `order`

Maps to

@example This is a test!

type: `number`



---

`Row` (component)
=================



Props
-----

### `align`

Controls child flex alignment using `justify-content` and `align-items`.

type: `string`

