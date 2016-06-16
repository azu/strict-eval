// LICENSE : MIT
"use strict";
const assert = require("assert");
const strictEval = require("../lib/strict-eval");
// const in strict mode
strictEval(`
    const assert = require("assert");
    assert(true);
`);
// throw error
try {
    strictEval(`
    const assert = require("assert");
    assert(false);
`);
} catch (error) {
    assert(error instanceof Error);
}