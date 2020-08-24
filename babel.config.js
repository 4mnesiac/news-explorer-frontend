const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "usage",
      corejs: "3.4.1"
    }
  ],
];

module.exports = {
  presets,
  plugins: ["@babel/plugin-proposal-class-properties"]
};