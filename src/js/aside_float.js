import Img from './img';

function AsideFloat( {id, title, content, pointContent, src, alt, caption, floated} ) {
    const classes = `box ${floated === "true" ? 'box-float' : 'box-last'}`;
    return (
        <aside id={id} className={classes}>
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
export default AsideFloat;