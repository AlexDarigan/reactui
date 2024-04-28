function Column(props) {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            height: props.height,
            width: props.width,
            alignItems: props.alignHorizontal,
            gap: props.gap,
            margin: props.margin,
            padding: props.padding,
            backgroundColor: props.backgroundColor
        }}>
            {props.children}
        </div>
    );
}

export default Column;

Column.defaultProps = {
    height: "fit-content",
    width: "fit-content",
    alignHorizontal: "center",
    gap: "10px",
    backgroundColor: "#ffffff00",
    margin: "0px",
    padding: "0px",
}
