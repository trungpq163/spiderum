/* eslint-disable-next-line */
export interface FacebookIconProps extends React.SVGProps<SVGSVGElement> {}

export function FacebookIcon(props: FacebookIconProps) {
  return (
    <svg
      width={21}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.802 0H1.912C1.299 0 .802.47.802 1.049v16.903C.804 18.531 1.3 19 1.913 19h9.633v-7.348H8.933V8.776h2.612V6.66c0-2.455 1.586-3.79 3.903-3.79 1.11 0 2.064.078 2.342.113v2.565h-1.598c-1.26 0-1.505.566-1.505 1.397v1.831H17.7l-.392 2.876h-2.622V19h5.115c.613 0 1.11-.47 1.11-1.048V1.047c0-.579-.497-1.048-1.11-1.048Z"
        fill="#747474"
      />
    </svg>
  );
}

export default FacebookIcon;
