function Row(props) {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: props.flexDirection,
            height: props.height,
            width: props.width,
            alignItems: props.alignVertical, 
            gap: props.gap,
            backgroundColor: props.backgroundColor,
            justifyContent: props.justifyContent
        }}>
            {props.children}
        </div>
    );
}

export default Row;

Row.defaultProps = {
    flexDirection: "row",
    height: "fit-content",
    width: "fit-content",
    alignVertical: "center",
    gap: "10px", 
    backgroundColor: "#ffffff00",
    justifyContent: "space-evenly"
}