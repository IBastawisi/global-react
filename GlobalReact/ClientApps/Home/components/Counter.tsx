module Home {

    export const Counter: React.FC = () => {

        const [count, setCount] = React.useState(0)

        return (
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{count}</strong></p>

                <DefaultButton text="Increment" onClick={() => setCount(count + 1)} />
            </div>
        );
    }
}
