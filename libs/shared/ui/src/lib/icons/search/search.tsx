/* eslint-disable-next-line */
export interface ISearchIconProps {
  color?: string;
  className?: string;
}

export function SearchIcon(props: ISearchIconProps) {
  const { color, className } = props;
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.28 3.572a4.456 4.456 0 11-6.3 6.302 4.456 4.456 0 016.3-6.302zm1.95 7.11a6.457 6.457 0 10-1.141 1.141l3.459 3.46 1.141-1.142-3.459-3.459z"
        fill={color}
      />
    </svg>
  );
}

export default SearchIcon;
