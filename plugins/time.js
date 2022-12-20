'use strict';

const { DateTime } = require('luxon');

const getDateObj = (date) => {
  if (!date) {
    return DateTime.now();
  }

  return typeof date === 'string'
    ? DateTime.fromISO(date, { zone: 'UTC' })
    : DateTime.fromJSDate(date, { zone: 'UTC' });
};

const date = (dateObj, format) => {
  const obj = getDateObj(dateObj);

  const defined = {
    post: DateTime.DATE_MED,
    long: DateTime.DATE_FULL,
  };

  const custom = {
    url: "yyyy'/'MM'/'dd",
  };

  const knownFormat = defined[format] || DateTime[format];

  if (format === 'rss') {
    return obj.toRFC2822();
  } else if (format === 'iso') {
    return obj.toISO();
  } else if (format && !knownFormat) {
    return obj.toFormat(custom[format] || format);
  }

  return obj.toLocaleString(knownFormat || DateTime.DATE_MED);
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('date', date);
};
