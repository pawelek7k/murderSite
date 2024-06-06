import { StyledImage } from "./Styles";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  res: boolean;
}

export const Image = ({ src, alt, width, res }: ImageProps) => {
  return <StyledImage src={src} alt={alt} width={width} $res={res} />;
};
