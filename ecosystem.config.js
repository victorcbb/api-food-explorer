module.exports = {
  apps : [{
    name: "food-explorer",
    script: "./dist/server.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}