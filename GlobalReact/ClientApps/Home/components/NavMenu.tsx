module Home {

    export const NavMenu = withRouter(({ history }) => {
        return (
            <Nav
                onLinkClick={(ev: React.MouseEvent<HTMLElement>, item: Fabric.INavLink) => {
                    ev.nativeEvent.preventDefault();
                    history.push(item.key);
                }}
                selectedKey={history.location.pathname}
                selectedAriaLabel="Selected"
                ariaLabel="Nav basic example"
                styles={{
                    root: {
                        width: 208,
                        height: 'calc(100vh - 118px)',
                        boxSizing: 'border-box',
                        border: '1px solid #eee',
                        overflowY: 'auto'
                    }
                }}
                groups={[
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

                ]}
            />
        );
    });
}
