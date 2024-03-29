import Img from './img';

function Aside( {id, title, content, pointContent, src, alt, caption} ) {
    return (
        <aside id={id} className="box">
            <span className="boxhead">{title}</span>
            <p>{content}</p>
            {pointContent && <p className="point">{pointContent}</p>}
            {src &&
                <Img 
                    src={src}
                    alt={alt}
                    caption={caption}
                />
            }
        </aside>
    );
}
export default Aside;