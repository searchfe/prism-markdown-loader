"use strict";

const marked = require("markdown-it");
const prism = require('markdown-it-prism');
const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    const options = loaderUtils.getOptions(this);

    this.cacheable();

    const md = marked(options);
    md.use(prism);

    return md.render(markdown);
};
