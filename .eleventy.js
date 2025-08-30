const pluginRss = require("@11ty/eleventy-plugin-rss");

function xmlEscape(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);

    // Register custom filters for Nunjucks
    eleventyConfig.addNunjucksFilter("xmlEscape", xmlEscape);
        
    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');

    eleventyConfig.addFilter("limit", function (arr, limit) {
        return arr.slice(0, limit);
    });

    // Shuffle / randomize array 
    eleventyConfig.addFilter("shuffle", function(array) {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: '_includes',
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};