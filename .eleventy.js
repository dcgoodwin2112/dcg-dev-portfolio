// Import UserConfig for editor autocomplete.
const UserConfig = require("@11ty/eleventy/src/UserConfig");
const CleanCSS = require("clean-css");
const { format } = require("date-fns")

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

  eleventyConfig.addCollection('coding-career-reset', (collectionAPI) => {
    return collectionAPI.getFilteredByGlob('./src/blog/coding-career-reset/*.md').sort((a, b) => {
      return a.data.order <= b.data.order;
    });
  })

  eleventyConfig.addShortcode('formatDate', (rawDate) => {
    return format(new Date(`${rawDate} 00:00:00`), 'MMMM dd, yyyy');
  })

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
