module Home {

    export const Layout: React.FC = (props) => {
        return (
            <Stack horizontal>
                <Stack.Item>
                    <NavMenu />
                </Stack.Item>
                <Stack.Item className="p-3" grow={1}>
                    {props.children}
                </Stack.Item>
            </Stack>
        );
    }
}
