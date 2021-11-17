/* eslint-disable-next-line */
export interface DropdownIconProps {
  color?: string;
  className?: string;
}

export function DropdownIcon(props: DropdownIconProps) {
  const { color = 'white', className = '' } = props;
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DropdownIcon;
