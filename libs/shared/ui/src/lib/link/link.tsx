import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

export interface ILinkProps {
  href: string;
  className?: string;
}

export const Link: React.FC<ILinkProps> = (props) => {
  const router = useRouter();
  const { href, children, className = '' } = props;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      className={`cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
