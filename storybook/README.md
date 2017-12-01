This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Steps to create a react app with the Storybook

## Steps to create the React app

```
  npm install -g create-react-app
  create-react-app storybook
  cd storybook/
  npm start
```

## Steps to add the storybook

```
  npm i -g @storybook/cli
  cd storybook/
  getstorybook
  yarn run storybook
```


# Add css-modules for convenience

```
yarn remove react-scripts
yarn add react-scripts-cssmodules
```

You need to add `.storybook\webpack.config.js` to enable css-modules in storybook.