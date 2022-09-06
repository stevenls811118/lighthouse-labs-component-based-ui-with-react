export default function ComponentWithChildren ({heading, children}) { // props.heading / props.children
    // const [p, counter] = children;

    return(
        <section>
            <h2>{heading}</h2>
            {children}
            {/*counter*/}
            {/*p*/}
        </section>
    );
}
