function Column(props) {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            gap: "10px"
        }}>
            {props.children}
        </div>
    );
}

export default Column;