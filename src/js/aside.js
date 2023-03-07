import Img from './img';

function Aside(props) {
    return (
        <aside id={props.id} className="box">
            <span className="boxhead">{props.title}</span>
            <p>{props.content}</p>
            {props.pointContent && <p className="point">{props.pointContent}</p>}
            {props.src &&
                <Img 
                    src={props.src}
                    alt={props.alt}
                    caption={props.caption}
                />
            }
        </aside>
    );
}
export default Aside;