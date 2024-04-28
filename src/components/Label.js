
function Label(props) {
    return (
        <label style={{
            fontSize: props.fontSize
         }}>
            {props.label}
        </label>
    );
}

export default Label;

Label.defaultProps = {
    label: "label",
    fontSize: "18px"
}