const ParagraphWithProps = (props) => {
    // const text = props.text;
    // const {text} = props;

    console.log(props.text);

    console.log(props.children);

    return (
        <p>
            Hello, World!
            &nbsp;
            {props.text}
            {props.children}
        </p>
    );
};

export default ParagraphWithProps;
