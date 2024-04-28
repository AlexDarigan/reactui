function Row(props) {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: "row", 
            justifyContent: "center", 
            alignContent: "center", 
            alignItems: "center", 
            gap: "10px",
        }}>
            {props.children}
        </div>
    );
}

export default Row;