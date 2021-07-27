
function Img(props) {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>{props.caption}</figcaption>
        </figure>
    );
}
export default Img;