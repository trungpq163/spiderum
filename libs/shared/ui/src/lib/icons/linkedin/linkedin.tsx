/* eslint-disable-next-line */
export interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {}

export function LinkedinIcon(props: LinkedinIconProps) {
  return (
    <svg
      width={21}
      height={19}
      fill="#747474"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.418 0H2.21C1.409 0 .76.613.76 1.37v16.26c0 .757.649 1.37 1.45 1.37h17.208c.801 0 1.45-.613 1.45-1.37V1.37c0-.757-.649-1.37-1.45-1.37ZM7.892 14.361H5.443v-6.96h2.45v6.96Zm-1.224-7.91h-.016c-.822 0-1.353-.535-1.353-1.203 0-.683.547-1.203 1.385-1.203s1.353.52 1.37 1.203c0 .668-.532 1.202-1.386 1.202Zm10.054 7.91h-2.449v-3.724c0-.935-.354-1.574-1.24-1.574-.676 0-1.08.43-1.256.847-.065.148-.081.356-.081.564v3.887H9.247s.032-6.307 0-6.96h2.449v.985c.325-.474.908-1.149 2.207-1.149 1.611 0 2.819.995 2.819 3.133v3.991Z" />
    </svg>
  );
}

export default LinkedinIcon;
