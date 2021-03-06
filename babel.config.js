const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "15",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
        ios: "12.2"
      },
      useBuiltIns: "usage",
      corejs: "3.4.1"
    }
  ],
];

module.exports = {
  presets,
  plugins: ["@babel/plugin-proposal-class-properties"]
};