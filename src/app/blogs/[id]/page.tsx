import React from "react";

const DetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("id", params.id);
  return (
    <div>
      <h2>{`detail ne: ${params.id}`}</h2>
    </div>
  );
};

export default DetailBlog;
