const { BrowserRouter, Route, Link, withRouter } = ReactRouterDOM;
const { Nav, DefaultButton, Stack, StackItem } = Fabric

namespace Home {

    export const App: React.FC = () => {

        return (
            <BrowserRouter basename="/Home">
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data' component={FetchData} />
                </Layout>
            </BrowserRouter>
        );
    }

}