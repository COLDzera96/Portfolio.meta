import React from "react";
import { useFormik } from "formik";
import { Puff } from 'react-loader-spinner';

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      
      submit("abc.com", values); // Corrected onSubmit function
      onOpen(`${response.type}`,`${response.message}`)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .min(3, 'First name must be at least 3 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format')
        .matches(
          /^[^@]+@[^@.]+\.[^@]+$/,
          'Email must be in the format "username@domain.tld"'
        ),
      type: Yup.string()
        .required('Type is required'),
      comment: Yup.string()
        .required()
        .min(25, "Must be at least 25 characters")
        .max(255, 'Comment cannot exceed 255 characters'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={formik.errors.type && formik.touched.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value="">Select type</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                {formik.errors.type && formik.touched.type && (
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {formik.errors.comment && formik.touched.comment && (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                )}
              </FormControl>

      <button 
      type="submit" 
      style={{
        backgroundColor: 'black', // Set the background color to black
        color: 'white', // Set the text color to white for better contrast
        width: '100%', // Full width
        padding: '10px', // Padding for better appearance
        border: 'none', // Remove default border
        borderRadius: '5px', // Rounded corners
        display: 'flex', // Flex display to center the content
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
      }}
      disabled={isLoading} // Disable the button when loading
    >
      {isLoading ? (
        <Puff
  visible={true}
  height="30"
  width="40"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      ) : (
        <strong>Submit</strong>
      )}
    </button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
