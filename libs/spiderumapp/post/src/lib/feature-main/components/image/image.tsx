import { Caption, Image as Img, ImageWrapper } from './image.styles';

export interface IImageProps {
  src?: string;
  caption?: string;
}

export const Image: React.FC<IImageProps> = (props) => {
  const { src, caption } = props;
  return (
    <ImageWrapper>
      <Img src={src} />
      <Caption>{caption}</Caption>
    </ImageWrapper>
  );
};
