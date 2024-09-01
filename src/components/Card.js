import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      alignItems="stretch"
      spacing={0}
      fontFamily="Brilliant Cut Pro Medium"
    >
      <Image src="https://images.hdqwalls.com/download/skull-glowing-minimal-neon-5k-o8-2560x1440.jpg" alt={title} width="100%"/>
      <VStack p={4} spacing={3} alignItems="stretch">
        <Heading as="h3" size="md" textAlign="center" fontFamily="Brilliant Cut Pro Medium">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
        <HStack justifyContent="flex-start">
          <Text color="blue.600" fontWeight="bold">
           <a href=""> See more </a>
          </Text>
          <FontAwesomeIcon icon={faArrowRight} color="#3182CE" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
