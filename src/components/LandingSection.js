import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import musk from "./musk.jpg";
const greeting = "Hello, I am Peta Paka!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src="https://ih1.redbubble.net/image.2402525940.2475/st,small,507x507-pad,600x600,f8f8f8.jpg" name={greeting} style={{ width: '200px', height: '200px' }}></Avatar>
    
      <strong><p>{greeting}</p></strong>
    
    <VStack marginTop="10px" fontFamily="cursive">
      
      <Heading fontFamily="Brilliant Cut Pro Medium" >{bio1}</Heading>
    </VStack>
    <VStack><Heading fontFamily="Brilliant Cut Pro Medium">{bio2}</Heading></VStack>
    

  </FullScreenSection>
);

export default LandingSection;
