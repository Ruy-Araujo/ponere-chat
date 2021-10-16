import Link from 'next/link';

const Button = (props) => {
  return (
    <>
      <Link href={props.href}>
        <a className={props.style}>{props.content.toUpperCase()}</a>
      </Link>
    </>
  );
};

export default Button;
