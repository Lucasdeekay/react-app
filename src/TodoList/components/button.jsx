const getColor = (color, size, width) => {
    let btn = "mx-1 btn btn-";
    switch (color){
        case "primary": btn += "primary"; break;
        case "secondary": btn += "secondary"; break;
        case "warning": btn += "warning"; break;
        case "danger": btn += "danger"; break;
        case "dark": btn += "dark"; break;
        case "info": btn += "info"; break;
        default: btn += "dark"; break;
    };
    switch (size){
        case "long": btn += " btn-lg "; break;
        case "short": btn += " btn-sm "; break;
        default: btn += " btn-sm "; break;
    };
    btn += "w-" + width;
    return btn;
};

const Button = (props) => {
    return ( 
        <button className={ getColor(props.color, props.size, props.width) } type={ props.type } onClick={props.onClick}>{ props.children }</button>
     );
}
 
export default Button;