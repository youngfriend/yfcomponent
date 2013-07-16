/**
 * helper.js
 * Copyright (c) 2013 Youngfriend Inc.
 * All rights reserved.
 */
var util = require('util');
var helper = {
    version: [0, 1, 4],
    printUsg: function () {
        util.puts("usage: yfcomponent [options] enName cnName");
        util.puts("");
        util.puts("options:");
        util.puts("    -h,--help      Print help (this message) and exit.");
        util.puts("    -v,--version   Print version number and exit.");
    }
}
for (var h in helper) {
    exports[h] = helper[h];
}