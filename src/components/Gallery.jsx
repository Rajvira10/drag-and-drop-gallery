import { useContext, useEffect } from "react";
import SortableItem from "./SortableItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import images from "./Images";
import { BsImage } from "react-icons/bs";
import { SortableImagesContext } from "../contexts/SortableContext";

const Gallery = () => {
  const {
    allImages,
    setAllImages,
    selectedImageCount,
    setSelectedImageCount,
    selectedImages,
    setSelectedImages,
  } = useContext(SortableImagesContext);

  useEffect(() => {
    setAllImages(images);
  }, []);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setAllImages((images) => {
        const activeIndex = images.indexOf(active.id);
        const overIndex = images.indexOf(over.id);
        return arrayMove(images, activeIndex, overIndex);
      });
    }
  };

  const handleDelete = () => {
    const newImages = allImages.filter(
      (_, index) => !selectedImages.includes(index)
    );

    setAllImages(newImages);
    setSelectedImageCount(0);
    setSelectedImages([]);
  };

  return (
    <div className="max-w-5xl  mx-auto pb-5  rounded bg-white">
      <div className="mb-5">
        <div className=" mt-2 py-4 border-b-slate-200 border-b-2">
          {selectedImageCount === 0 ? (
            <p className="pl-6 font-bold text-xl">Gallery</p>
          ) : (
            <div className="px-6  flex justify-between items-center">
              <p className="font-bold text-xl">
                <input
                  type="checkbox"
                  checked={true}
                  className="mr-2 w-4 h-4"
                  onChange={() => {
                    setSelectedImageCount(0);
                    setSelectedImages([]);
                  }}
                />
                {selectedImageCount} File Selected
              </p>
              <button
                className="text-red-500 font-semibold hover:underline"
                onClick={handleDelete}
              >
                Delete file
              </button>
            </div>
          )}
        </div>
        <div className="pt-5">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <div className="grid grid-cols-5 gap-5 px-5">
              <SortableContext items={allImages}>
                {allImages.map((image, index) => (
                  <SortableItem key={image} image={image} index={index} />
                ))}
                <div className="bg-[rgb(250,250,250)] border-dashed relative group rounded cursor-pointer border-2 flex flex-col justify-center space-y-5 items-center font-semibold">
                  <BsImage />
                  <p className="text-[6px] md:text-md lg:text-lg md:mt-2">
                    Add Images
                  </p>
                </div>
              </SortableContext>
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
