module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
    ],
    "ignorePatterns": [
        "/public/render-page.js",
    ],
};