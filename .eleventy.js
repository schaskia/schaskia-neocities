module.exports = function (eleventyConfig) {

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

    eleventyConfig.addCollection("journal_en", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/en/journal-posts/*.html");
    });
    eleventyConfig.addCollection("journal_fr", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/fr/journal-posts/*.html");
    });

    eleventyConfig.addCollection("albums_en", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/en/albums/*.html");
    });
    eleventyConfig.addCollection("albums_fr", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/fr/albums/*.html");
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