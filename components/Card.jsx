const Card = ({ title, description, createdAt, image }) => {
  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Created At:", createdAt);

  return (
    <div className="relative flex flex-col w-full">
      {/* Image Section */}
      <div className="relative m-2.5 overflow-hidden text-white rounded-md">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>

      {/* Date Section */}
      <div className="flex text-white px-3">
        <span>{createdAt}</span>
      </div>

      {/* Content Section */}
      <div className="px-4 py-2">
        <h6 className="mb-2 text-white text-3xl">{title}</h6>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
