function Image({src, width, height}) {
    return (
        <img src={src} width={width} height={height}/>
    )
}

Image.defaultProps = {
    width: "75px",
    height: "100px",
}

export default Image;