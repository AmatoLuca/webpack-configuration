module.exports = {
  "presets": ["@babel/preset-env",
  ["@babel/preset-react", { runtime: "automatic" }]
  ]
}

//there is a way to not opt in to not having to import a React (react module) to use it,
// whenever you are just using jsx in a file.
// in this way just when you'll need to use react import when you need to use 
// state or methods like those of lifecycle and so on.
// but again, if you need just to use jsx which is really cool.