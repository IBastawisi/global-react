var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var BrowserRouter = ReactRouterDOM.BrowserRouter, Route = ReactRouterDOM.Route, Link = ReactRouterDOM.Link, withRouter = ReactRouterDOM.withRouter;
var Nav = Fabric.Nav, DefaultButton = Fabric.DefaultButton, Stack = Fabric.Stack, StackItem = Fabric.StackItem;
var Home;
(function (Home) {
    Home.App = function () {
        return (React.createElement(BrowserRouter, { basename: "/Home" },
            React.createElement(Home.Layout, null,
                React.createElement(Route, { exact: true, path: '/', component: Home.Home }),
                React.createElement(Route, { path: '/counter', component: Home.Counter }),
                React.createElement(Route, { path: '/fetch-data', component: Home.FetchData }))));
    };
})(Home || (Home = {}));
var Home;
(function (Home) {
    document.addEventListener('DOMContentLoaded', function () {
        ReactDOM.render(React.createElement(Home.App, null), document.getElementById('home'));
    }, false);
})(Home || (Home = {}));
var Home;
(function (Home) {
    Home.Counter = function () {
        var _a = React.useState(0), count = _a[0], setCount = _a[1];
        return (React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", { "aria-live": "polite" },
                "Current count: ",
                React.createElement("strong", null, count)),
            React.createElement(DefaultButton, { text: "Increment", onClick: function () { return setCount(count + 1); } })));
    };
})(Home || (Home = {}));
var Home;
(function (Home) {
    var FetchData = (function (_super) {
        __extends(FetchData, _super);
        function FetchData(props) {
            var _this = _super.call(this, props) || this;
            _this.state = { forecasts: [], loading: true };
            return _this;
        }
        FetchData.prototype.componentDidMount = function () {
            this.populateWeatherData();
        };
        FetchData.renderForecastsTable = function (forecasts) {
            return (React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Date"),
                        React.createElement("th", null, "Temp. (C)"),
                        React.createElement("th", null, "Temp. (F)"),
                        React.createElement("th", null, "Summary"))),
                React.createElement("tbody", null, forecasts.map(function (forecast) {
                    return React.createElement("tr", { key: forecast.date },
                        React.createElement("td", null, forecast.date),
                        React.createElement("td", null, forecast.temperatureC),
                        React.createElement("td", null, forecast.temperatureF),
                        React.createElement("td", null, forecast.summary));
                }))));
        };
        FetchData.prototype.render = function () {
            var contents = this.state.loading
                ? React.createElement("p", null,
                    React.createElement("em", null, "Loading..."))
                : FetchData.renderForecastsTable(this.state.forecasts);
            return (React.createElement("div", null,
                React.createElement("h1", { id: "tabelLabel" }, "Weather forecast"),
                React.createElement("p", null, "This component demonstrates fetching data from the server."),
                contents));
        };
        FetchData.prototype.populateWeatherData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch('/weatherforecast')];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            data = _a.sent();
                            this.setState({ forecasts: data, loading: false });
                            return [2];
                    }
                });
            });
        };
        FetchData.displayName = FetchData.name;
        return FetchData;
    }(React.Component));
    Home.FetchData = FetchData;
})(Home || (Home = {}));
var Home;
(function (Home_1) {
    Home_1.Home = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello, world!"),
            React.createElement("p", null, "Welcome to your new single-page application, built with:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: 'https://get.asp.net/' }, "ASP.NET Core"),
                    " and ",
                    React.createElement("a", { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' }, "C#"),
                    " for cross-platform server-side code"),
                React.createElement("li", null,
                    React.createElement("a", { href: 'https://facebook.github.io/react/' }, "React"),
                    " for client-side code"),
                React.createElement("li", null,
                    React.createElement("a", { href: 'http://getbootstrap.com/' }, "Bootstrap"),
                    " for layout and styling"),
                React.createElement("li", null,
                    React.createElement("a", { href: 'https://developer.microsoft.com/en-us/fabric#/controls/web' }, "Office-Ui"),
                    " for component set")),
            React.createElement("p", null, "To help you get started, we have also set up:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("strong", null, "Client-side navigation"),
                    ". For example, click ",
                    React.createElement("em", null, "Counter"),
                    " then ",
                    React.createElement("em", null, "Back"),
                    " to return here.")),
            React.createElement("p", null,
                "Make sure node is installed and cd to ",
                React.createElement("code", null, "ClientApps"),
                " & run ",
                React.createElement("code", null, "npm install"),
                "we need node_modules just for typings!",
                React.createElement("br", null),
                "The ",
                React.createElement("code", null, "ClientApps"),
                " subdirectory contains your SPAs, each is one module compiled with tsc to ",
                React.createElement("code", null, "wwwroot/js"),
                React.createElement("br", null),
                "Make sure to link the compiled js file in the corresponding html view.",
                React.createElement("br", null),
                "Each module contains a set of components exposed to the global namespace, accessible via module.component & can be rendered with ReactDOM",
                React.createElement("br", null),
                React.createElement("code", null,
                    "ReactDOM.render( React.createElement(module.component, ",
                    "{",
                    " ...props ",
                    "}",
                    "), document.getElementById(node - id) )"),
                React.createElement("br", null),
                "Finally: React is meant to be used with bundlers to resolve module imports (each file is a module), I think using globals is only usefull when you have multiple small SPAs not a single app!")));
    };
})(Home || (Home = {}));
var Home;
(function (Home) {
    Home.Layout = function (props) {
        return (React.createElement(Stack, { horizontal: true },
            React.createElement(Stack.Item, null,
                React.createElement(Home.NavMenu, null)),
            React.createElement(Stack.Item, { className: "p-3", grow: 1 }, props.children)));
    };
})(Home || (Home = {}));
var Home;
(function (Home) {
    Home.NavMenu = withRouter(function (_a) {
        var history = _a.history;
        return (React.createElement(Nav, { onLinkClick: function (ev, item) {
                ev.nativeEvent.preventDefault();
                history.push(item.key);
            }, selectedKey: history.location.pathname, selectedAriaLabel: "Selected", ariaLabel: "Nav basic example", styles: {
                root: {
                    width: 208,
                    height: 'calc(100vh - 118px)',
                    boxSizing: 'border-box',
                    border: '1px solid #eee',
                    overflowY: 'auto'
                }
            }, groups: [
                {
                    links: [
                        {
                            name: 'Home',
                            url: '/Home',
                            key: '/',
                            expandAriaLabel: 'Expand Home section',
                            collapseAriaLabel: 'Collapse Home section',
                            links: [
                                {
                                    name: 'Counter',
                                    url: 'Home/counter',
                                    key: '/counter',
                                },
                                {
                                    name: 'Fetch Data',
                                    url: '/Home/fetch-data',
                                    key: '/fetch-data',
                                }
                            ],
                            isExpanded: true
                        }
                    ]
                }
            ] }));
    });
})(Home || (Home = {}));
//# sourceMappingURL=home.js.map