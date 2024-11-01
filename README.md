# HERL Throughout the Years Digital Narrative

Welcome to the HERL Throughout the Years Digital Narrative project. This interactive digital narrative explores over 30 years of HERL's history in developing cutting-edge technology for disabled veterans. The project is designed to be both engaging and informative, utilizing a skeuomorphic design to create a visually immersive experience. The final product is expected to be completed by the end of 2024 and will be available on the [HERL Website](https://herl.pitt.edu).

## Technologies Used

- **Svelte**: Chosen for its performance and ability to compile down to native JavaScript, making it ideal for embedding in iframes.
- **Tailwind CSS**: For styling and responsive design.
- **TypeScript**: To enhance JavaScript with type safety.
- **Vite**: For fast and efficient development and build processes.

## Features

- **Interactive Book Design**: The narrative is presented in a book format, allowing users to flip through pages using buttons or keyboard arrows.
- **Responsive Design**: The layout adjusts for different screen sizes, as it is intended to be embedded in an iframe.
- **Dark Mode**: Users can toggle between light and dark themes.
- **Content Modality**: Descriptions can be expanded in a modal to maintain space efficiency, and images can be viewed in a lightbox for better visibility.
- **Performance Optimizations**: The project is optimized for smooth transitions and minimal load times, even with dense content.

## Development Notes

- **Skeuomorphic Design**: The project uses a skeuomorphic design to mimic a physical book, enhancing the narrative experience.
- **3D Animations**: Implemented using CSS `transform-style: preserve-3d` for realistic page flipping effects.
- **Content Management**: Pages are dynamically loaded and managed to ensure a seamless user experience.

## Running Locally

To run this project locally, ensure you have Node.js installed. Then, follow these steps:

1. Install the project dependencies:

   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

This will launch the development server and open the project in your default web browser.
