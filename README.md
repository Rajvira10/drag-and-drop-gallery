# Sortable Image Gallery with React and DND-Kit

## Overview

This project is a React application that allows you to create a sortable image gallery with the help of the DND-Kit library. The application provides features like drag-and-drop functionality to reorder images and the ability to select multiple images for further actions.

## Components

### 1. `SortableItem`

- `SortableItem` represents an individual image within the gallery.
- It uses the `@dnd-kit/sortable` package to enable drag-and-drop functionality.
- Users can select images using checkboxes, and the component updates the selected images and their count accordingly.
- TouchAction has been set to false for touch users like mobile phone users.

### 2. `Home`

- The `Home` component serves as the main entry point for the application.
- It wraps the entire application with the `SortableContextProvider` to provide context to child components.

### 3. `Gallery`

- The `Gallery` component is where the main gallery is displayed.
- It imports and uses the `SortableItem` component for rendering individual images.
- Images can be reordered using drag-and-drop functionality provided by the DND-Kit.
- Users can select multiple images for actions like deletion.

## useContext

- The application uses a context named `SortableImagesContext` to manage the state related to the gallery, including all images, selected images, and selected image count.
- The context is provided at the top level of the application to make the state available to child components.

## Drag and Drop

- The DND-Kit library is used to enable drag-and-drop functionality for reordering images in the gallery.
- When an image is dragged and dropped, the `onDragEnd` function in the `Gallery` component is triggered to update the image order.

## Actions

- Users can select and deselect images by clicking on checkboxes in the `SortableItem` component.
- The selected images and selected image count are updated accordingly.
- Users can also delete selected images in the gallery using the "Delete file" button.

## Styling

- The application uses Tailwind CSS to style the components and make them visually appealing.

