
function Label(props) {
    return (
        <label style={{
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            color: props.fontColor,
            fontFamily: props.fontFamily,
         }}>
            {props.label}
        </label>
    );
}

export default Label;

Label.defaultProps = {
    label: "label",
    fontSize: "18px",
    fontColor: "black",
    fontWeight: "bold",
    fontFamily: "Roboto Mono, monospace"
}