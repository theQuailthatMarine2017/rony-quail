module.exports = {
  // options...
  "devServer": {
    "proxy": {
      "^/api": {
        "target": "http://localhost:7000"
      }
    }
  }
}