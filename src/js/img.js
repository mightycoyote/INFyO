
function Img(props) {
    return (
        <figure>
            <div>
                <img src={props.src} alt={props.alt} />
            </div>
            <figcaption>{props.caption}</figcaption>
        </figure>
    );
}
export default Img;