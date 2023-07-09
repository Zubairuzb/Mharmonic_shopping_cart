import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

let Contact = () => {
  const form = useRef();
  const nameRef = useRef(null);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_7zwyh4i",
        "template_sc24j6u",
        form.current,
        "J4yD3BZfi3RHaBJZX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box>
      <FormControl ref={form} onSubmit={sendEmail}>
        <FormLabel>Name</FormLabel>
        <input type="text" name="from_name" ref={nameRef} />
        <FormHelperText>Please use your real name</FormHelperText>
        <FormLabel>Email</FormLabel>
        <input type="email" name="from_email" />
        <FormLabel>Message</FormLabel>
        <textarea name="message" />
        <FormHelperText>Describe what you need clearly</FormHelperText>
        <input type="submit" value="Send" />
      </FormControl>
    </Box>
  );
};

export default Contact;
