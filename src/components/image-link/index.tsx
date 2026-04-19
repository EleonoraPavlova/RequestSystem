import { Link } from "@heroui/react";
import { ReactElement } from "react";

type ImageLinkProps = {
  imageUrl: string;
};

const ImageLink = ({ imageUrl }: ImageLinkProps): ReactElement => {
  return (
    <Link href={imageUrl} target="_blank" className="text-purple-600 hover:underline">
      link
    </Link>
  );
};

export default ImageLink;
