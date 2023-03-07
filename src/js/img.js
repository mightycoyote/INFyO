
function Img( {src, alt, caption} ) {
    return (
        <figure>
            <div>
                <img src={src} alt={alt} />
            </div>
            <figcaption>{caption}</figcaption>
        </figure>
    );
}
export default Img;