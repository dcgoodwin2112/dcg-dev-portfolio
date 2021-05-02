// Import UserConfig for editor autocomplete.
const UserConfig = require("@11ty/eleventy/src/UserConfig");
const CleanCSS = require("clean-css");

/**
 * @param {UserConfig} eleventyConfig
 * @returns {}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  return {
    dir: {
      input: "src",
    },
  };
};
