// LICENSE : MIT
"use strict";
var vm = require("vm");
function getGlobalAsObject() {
    var sandbox = {};
    var keys = Object.keys(global);
    for (var i = 0, ii = keys.length; i < ii; i++) {
        var key = keys[i];
        sandbox[key] = global[key];
    }
    sandbox["require"] = require;
    return sandbox;
}
function strictfy(code) {
    return '"use strict";\n' + code;
}
module.exports = function strictEval(code, sandbox, options) {
    var defaultSandbox = sandbox ? sandbox : getGlobalAsObject();
    var defaultOptions = options ? options : {};
    var strictCode = strictfy(code);
    vm.runInNewContext(strictCode, defaultSandbox, defaultOptions);
};