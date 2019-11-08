const slugify = (text, separator) =>
  text
    .split(' ')
    .join(separator || '-')
    .toLowerCase();

module.exports = {
  slugify,
};
