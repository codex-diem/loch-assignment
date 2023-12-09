import "./autoRotateCarousel.css";

const itemDuplicate = 2;

const AutoRotateCarousel = ({ items }) => {
  return (
    <div className="carousel-container">
      {Array(itemDuplicate).fill(
        <div className="carousel-slide">
          {items && items.map((item, index) => <img key={index} src={item} />)}
        </div>
      )}
      {/* We are duplicating this div to give a feel of infinite carousel */}
    </div>
  );
};

export default AutoRotateCarousel;
