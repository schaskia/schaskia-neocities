module.exports = function (eleventyConfig) {

    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');

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