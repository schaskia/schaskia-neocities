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

    eleventyConfig.addCollection("journal", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/journal/*.html");
    });
    eleventyConfig.addCollection("disquaire", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/disquaire/*.html");
    });

    eleventyConfig.addCollection("photos", function(collectionApi) {
        const fs = require("fs");
        const path = "src/assets/images/photos";
        return fs.readdirSync(path)
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map(file => ({
            url: `/assets/images/photos/${file}`
            }));
        });

    eleventyConfig.addFilter("montrealDate", dateObj => {
        return dateObj.toLocaleString("fr-CA", {
        timeZone: "America/Montreal",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        });
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