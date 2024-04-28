
function Label(props) {
    return (
        <label style={{
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            color: props.fontColor
            
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
}