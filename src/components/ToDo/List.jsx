const List = (props) => {
    const LIs = props.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
    });

    return (
        <ul>
            {LIs}
        </ul>
    );
};

export default List;
