import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgUrl, content}) => {
  return (
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {content}
      <Image src={imgUrl} alt="Product" width={500} height={500} />
    </div>
  );
};

export default ProjectCard;
