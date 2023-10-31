import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SortableImagesContext = createContext();

export function SortableContextProvider({ children }) {
  const [allImages, setAllImages] = useState([]);
  const [selectedImageCount, setSelectedImageCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const contextValue = {
    allImages,
    setAllImages,
    selectedImageCount,
    setSelectedImageCount,
    selectedImages,
    setSelectedImages,
  };

  return (
    <SortableImagesContext.Provider value={contextValue}>
      {children}
    </SortableImagesContext.Provider>
  );
}

SortableContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
