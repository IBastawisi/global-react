## GlobalReact

A simple .net core MVC project with multiple React SPAs :

### `Get started`

Make sure node is installed and cd to `ClientApps` & run `npm install`, we need node_modules just for typings!

The `ClientApps` subdirectory contains your SPAs, each is one module compiled with tsc to `wwwroot/js`.

Make sure to link the compiled js file in the corresponding html view.

Each module contains a set of components exposed to the global namespace, accessible via module.component & can be rendered with ReactDOM:

`ReactDOM.render( React.createElement(module.component, {"{"} ...props {"}"}), document.getElementById(node - id) )`

Finally: React is meant to be used with bundlers to resolve module imports (each file is a module), I think using globals is only usefull when you have multiple small SPAs not a single app!        