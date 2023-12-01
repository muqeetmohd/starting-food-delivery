export default function Button({children, textOnly, className, ...props}) {
    let addClass = textOnly ? 'text-button' : 'button';
    addClass += ' ' + className;
return (
    <button className={addClass}{...props}>
        {children}
    </button>
);

}
