module Home {

    export const Home: React.FC = () => {

        return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
          <li><a href='https://developer.microsoft.com/en-us/fabric#/controls/web'>Office-Ui</a> for component set</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
        </ul>
        <p>Make sure node is installed and cd to <code>ClientApps</code> & run <code>npm install</code>
            we need node_modules just for typings!
            <br />
            The <code>ClientApps</code> subdirectory contains your SPAs, each is one module compiled with tsc to <code>wwwroot/js</code>
            <br />
            Make sure to link the compiled js file in the corresponding html view.
            <br />
            Each module contains a set of components exposed to the global namespace, accessible via module.component & can be rendered with ReactDOM
            <br />        
            <code>ReactDOM.render( React.createElement(module.component, {"{"} ...props {"}"}), document.getElementById(node - id) )</code>
            <br />        
            Finally: React is meant to be used with bundlers to resolve module imports (each file is a module), I think using globals is only usefull when you have multiple small SPAs not a single app!        
        </p>
      </div>
    );
  }
}