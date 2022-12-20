const yaml = require('js-yaml');

const time = require('./plugins/time');

module.exports = function (eleventyConfig) {
  // config plugins
  eleventyConfig.addPlugin(time);

  // pass-through
  eleventyConfig.addPassthroughCopy({'./src/_images': 'images'});

  // config
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addDataExtension('yaml', yaml.load);

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
