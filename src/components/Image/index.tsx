interface ImageProps {
  src: string;
  alt: string;
  width: number;
}

export const Image = ({ src, alt, width }: ImageProps) => {
  return <img src={src} alt={alt} width={width} />;
};
