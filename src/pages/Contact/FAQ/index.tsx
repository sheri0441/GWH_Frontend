import { Box, Typography } from "@mui/material";
import Faq from "./Faq";
import FAQData from "./FAQ.json";

const FAQSection = () => {
  return (
    <Box
      sx={{
        paddingTop: "4rem",
      }}
      id="faq"
    >
      <Typography
        component={"h2"}
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 500,
          marginBottom: "2rem",
        }}
      >
        Frequently Asked Questions
      </Typography>
      {FAQData.map((single, index) => (
        <Faq key={index} singleQuestion={single} />
      ))}
    </Box>
  );
};

export default FAQSection;
