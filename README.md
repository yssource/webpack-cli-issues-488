
# `webpack-cli` Issue #[488](https://github.com/webpack/webpack-cli/issues/488)

## master branch, running webpack-cli without webpack.cofnig.js

### fail to run

```shell
webpack ./index.js --provide jQuery=jquery --provide '$=jquery' -d -o ./bundle.js
```

or  

```shell
yarn run fail
```

[./cli-fial.png](./cli-fail.png)  

### successfully to run

```shell
webpack ./index.js --module-bind 'js=imports-loader?$=jquery' --module-bind 'js=imports-loader?jQuery=jquery' -d -o ./bundle.js
```

or  

```shell
yarn run ok
```

[./cli-ok.png](./cli-ok.png)  

## webpack.config.js branch, running with the configuration file.

```shell
webpack
```

or  

```shell
yarn run webpack
```

[./webpack.png](./webpack.png)  

# testing

Assume the root path of project is `/tmp/webpack-cli-issus-488/`, open the index.html on brower directly. For example.  
`file:///tmp/webpack-cli-issus-488/index.html`  
