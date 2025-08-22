module.exports = function (eleventyConfig) {

    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');

    eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
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