export interface ISVGProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  className?: string;
}

export const SVG: React.FC<ISVGProps> = (props) => {
  const { name, className = '', ...restProps } = props;
  const url = `/svg/${name}.svg`;

  return (
    <img
      src={url}
      alt={name}
      loading="lazy"
      className={className}
      {...restProps}
    />
  );
};

export default SVG;
