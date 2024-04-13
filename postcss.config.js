module.exports = {
  plugins: [
    [
      "@csstools/postcss-global-data",
      {
        files: ["src/theme/_media-queries.css"],
      },
    ],
    "postcss-preset-env",
    "autoprefixer",
  ],
};
