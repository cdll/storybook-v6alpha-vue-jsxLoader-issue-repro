module.exports = {
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 8%",
            "last 8 versions",
            "not ie <= 8"
          ]
        }
      }
    ],
    "@vue/app"
  ],
  "plugins": [
    "transform-vue-jsx"
  ]
}
