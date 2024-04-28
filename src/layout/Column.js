function Column(props) {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            gap: props.gap
        }}>
            {props.children}
        </div>
    );
}

export default Column;

Column.defaultProps = {
    gap: "10px"
}