const Button = (props) => {
  return (
    <a href={props.href} className={props.style}>
      {props.content.toUpperCase()}
    </a>
  );
};

export default Button;
