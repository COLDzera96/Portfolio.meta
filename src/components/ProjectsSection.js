import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

// Import all images
import photo1 from "../images/photo2.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: "https://w0.peakpx.com/wallpaper/509/957/HD-wallpaper-sea-of-thieves-black-background-pc-gaming-skull-video-games-red-thumbnail.jpg",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: "https://images.hdqwalls.com/download/skull-glowing-minimal-neon-5k-o8-2560x1440.jpg",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: "https://images.wallpapersden.com/image/download/sea-of-thieves-game-poster_a2lsZWmUmZqaraWkpJRobWllrWdma2U.jpg",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: "https://cdna.artstation.com/p/assets/images/images/021/321/270/large/teodor-todorov-steam-avatar1.jpg?1571226783",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      pt={50}
      pb={170}
      alignItems="flex-start"
      spacing={8}
      
      
    >
      <Heading as="h1" id="projects-section" justifyContent="center" fontFamily="Brilliant Cut Pro Medium" marginLeft="450px">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        paddingTop={30}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;