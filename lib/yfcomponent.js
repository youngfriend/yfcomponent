/**
 * nodefile.js
 * Copyright (c) 2013 Youngfriend Inc.
 * All rights reserved.
 */
var fs = require('fs'), path = require('path'), params;
exports.createTpl = function (args) {
    params = args;
    var replaceTpls = ['index.js', 'editor/index.js'], replace = ['@NAME@', '@CNAME@', '@NAME_CAMELCASE_L@', '@NAME_CAMELCASE_U@'], dirs = ['assets', 'editor', 'tpl']
        , root = path.join(params[0], params[1]);
    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
    }
    dirs.forEach(function (value, index) {
        var suffix, fileName = params[1], dir = path.join(root, value);
        switch (index) {
            case 0:
                suffix = '.less';
                break;
            case 1:
                suffix = '.js';
                fileName = 'Attrs';
                break;
            default :
                suffix = '.tpl.html';
        }
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        try {
//            if (suffix) {
//                if (index === 2) {
//                    fs.writeFile(path.join(dir, params[1] + suffix), '<div class="c-view-inner"></div>', 'utf8');
//                }
//                fs.writeFile(path.join(dir, params[1] + suffix), '', 'utf8');
//            }
//            else {
            fs.createReadStream(path.join(__dirname, '../template', value, 'temp' + suffix)).pipe(fs.createWriteStream(path.join(dir, params[1] + suffix)));
//            }
        } catch (err) {
            console.log(err);
        }
    });
    replaceTpls.forEach(function (fileName) {
        generateFile(root, fileName, replace);
    });
}
function generateFile(root, fileName, replace) {
    var camelCaseArray = params[1].split('-'), i, len, camelCaseLower = '', camelCaseUpper = '', replaceNames, firstChar, fragment;
    for (i = 0, len = camelCaseArray.length; i < len; i++) {
        firstChar = camelCaseArray[i].charAt(0);
        fragment = camelCaseArray[i].substr(1);
        camelCaseLower += (i === 0) ? firstChar.toLowerCase() + fragment : firstChar.toUpperCase() + fragment;
        camelCaseUpper += firstChar.toUpperCase() + fragment;
    }
    replaceNames = [params[1], params[2], camelCaseLower, camelCaseUpper];
    fs.readFile(path.join(__dirname, '../template', fileName), 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        replace.forEach(function (value, index) {
            data = data.replace(new RegExp(value, 'g'), replaceNames[index]);
        });
        fs.writeFile(path.join(root, fileName), data, 'utf8');
    });
}