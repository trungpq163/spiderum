import { DetailedHTMLProps } from 'react';

interface IImageProps
  extends DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string;
  name: string;
}

export const Image: React.FC<IImageProps> = (props) => {
  const { className = '', name, ...restProps } = props;
  return <img loading="lazy" alt={name} className={className} {...restProps} />;
};

export default Image;
