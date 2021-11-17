export interface BellIconProps {
  color?: string;
  className?: string;
}

export function BellIcon(props: BellIconProps) {
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
        d="M15 17.5h5l-1.405-1.405A2.032 2.032 0 0118 14.66V11.5a6.002 6.002 0 00-4-5.659V5.5a2 2 0 10-4 0v.341c-2.33.824-4 3.047-4 5.659v3.159c0 .538-.214 1.055-.595 1.436L4 17.5h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BellIcon;
