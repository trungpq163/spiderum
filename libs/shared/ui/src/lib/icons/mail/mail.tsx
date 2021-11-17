export interface IMailIconProps {
  className?: string;
  color?: string;
}

export function MailIcon(props: IMailIconProps) {
  const { className = '', color = 'white' } = props;
  return (
    <svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3 19.5v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.57v8.93m-18 0a2 2 0 002 2h14a2 2 0 002-2m-18 0L9.75 15M21 19.5L14.25 15M3 10.5L9.75 15M21 10.5L14.25 15m0 0l-1.14.76a2 2 0 01-2.22 0L9.75 15"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MailIcon;
