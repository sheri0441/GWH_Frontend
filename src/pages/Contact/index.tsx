import { Box, Container } from "@mui/material";
import PageTitle from "../../utils/PageTitle";

import ContactForm from "./ContactForm";

import FAQSection from "./FAQ";

const ContactPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
        <FAQSection />
      </Box>
    </Container>
  );
};

export default ContactPage;
