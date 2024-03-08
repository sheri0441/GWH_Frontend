import { Box, Container, Typography } from "@mui/material";
import PolicyList from "./PolicyList";

const PolicyPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
            fontWeight: "600",
          }}
          component={"h1"}
        >
          Policy & Terms
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <Typography component={"h2"} variant="h4">
            Privacy Policy:
          </Typography>
          <Typography>
            At Gents Wardrobe Hub, we are committed to protecting your privacy
            and ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard the information
            you provide to us.
          </Typography>
          <ul style={{ padding: "0" }}>
            <PolicyList title={"Information Collection"}>
              We collect personal information such as your name, email address,
              shipping address, and payment details when you place an order or
              create an account on our website.
            </PolicyList>
            <PolicyList title={"Use of Information"}>
              We use your information to process orders, provide customer
              support, improve our services, and communicate with you about
              promotions and updates
            </PolicyList>
            <PolicyList title={"Data Security"}>
              We employ industry-standard security measures to protect your
              personal and payment information from unauthorized access,
              alteration, or disclosure.
            </PolicyList>
            <PolicyList title={"Third-party Disclosure"}>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              required by law or to fulfill orders.
            </PolicyList>
            <PolicyList title={"Cookies"}>
              We may use cookies and similar technologies to enhance your
              browsing experience and collect data about website usage patterns.
            </PolicyList>
            <PolicyList title={"Updates to Policy"}>
              This Privacy Policy may be updated periodically, and any changes
              will be posted on this page. By continuing to use our services,
              you consent to the updated Privacy Policy.
            </PolicyList>
          </ul>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <Typography component={"h2"} variant="h4">
            Terms of Service:
          </Typography>
          <Typography>
            By using the Gents Wardrobe Hub website and services, you agree to
            comply with the following Terms of Service:
          </Typography>
          <ul style={{ padding: "0" }}>
            <PolicyList title={"Account Registration"}>
              You must create an account to access certain features of the
              website. You are responsible for maintaining the confidentiality
              of your account credentials and for all activities that occur
              under your account.
            </PolicyList>
            <PolicyList title={"Order Acceptance"}>
              All orders placed through our website are subject to acceptance
              and availability. We reserve the right to cancel or refuse any
              order for any reason, including limitations on quantities
              available for purchase.
            </PolicyList>
            <PolicyList title={"Product Descriptions"}>
              We make every effort to accurately describe our products and
              provide clear images. However, we cannot guarantee that product
              descriptions are error-free, complete, or current.
            </PolicyList>
            <PolicyList title={"Intellectual Property"}>
              All content on the Gents Wardrobe Hub website, including text,
              images, logos, and trademarks, is the property of Gents Wardrobe
              Hub and protected by copyright and other intellectual property
              laws.
            </PolicyList>
            <PolicyList title={"Limitation of Liability"}>
              Gents Wardrobe Hub shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising out of your
              use of our website or products.
            </PolicyList>
            <PolicyList title={"Updates to Terms"}>
              We may update these Terms of Service from time to time, and any
              changes will be effective immediately upon posting. Your continued
              use of our website constitutes acceptance of the updated Terms.
            </PolicyList>
          </ul>
        </Box>
        <Typography>
          Please review our full Privacy Policy and Terms of Service carefully
          before using our website or services. If you have any questions or
          concerns, please contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default PolicyPage;
