module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_assets");
    eleventyConfig.addPassthroughCopy("_css");

    return {
        passthroughFileCopy: true,
        dir: {
            output: "public"
        }
    };
}