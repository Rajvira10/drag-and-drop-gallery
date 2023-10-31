import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";
import { useContext } from "react";
import { SortableImagesContext } from "../contexts/SortableContext";

const SortableItem = ({ image, index }) => {
  const { setSelectedImageCount, selectedImages, setSelectedImages } =
    useContext(SortableImagesContext);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: image,
      transition: {
        duration: 500,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleImageClick = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((item) => item !== index));
      setSelectedImageCount((prev) => prev - 1);
    } else {
      setSelectedImages([...selectedImages, index]);
      setSelectedImageCount((prev) => prev + 1);
    }
  };

  const isImageSelected = selectedImages.includes(index);

  return (
    <div
      className={`relative group rounded cursor-pointer border-2 ${
        index === 0 ? "col-span-2 row-span-2" : ""
      }`}
      style={{ touchAction: "none" }}
    >
      <input
        type="checkbox"
        className="absolute top-2 left-2 md:top-3 md:left-3 z-50 w-3 h-3 md:h-4 md:w-4"
        checked={isImageSelected}
        onChange={() => handleImageClick(index)}
      />
      <div
        ref={setNodeRef}
        style={styles}
        {...attributes}
        {...listeners}
        className="border"
      >
        {isImageSelected ? (
          <>
            <img src={image} alt="image" className="w-full h-auto relative" />
          </>
        ) : (
          <>
            <img src={image} alt="image" className="w-full h-auto" />
            <div className="absolute inset-0 opacity-0 hover:bg-black hover:opacity-50 transition-opacity duration-300 flex items-center justify-center"></div>
          </>
        )}
      </div>
    </div>
  );
};

SortableItem.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SortableItem;
