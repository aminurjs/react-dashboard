import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
const faqItems = [
  {
    question: "What is full-stack web development?",
    answer:
      "Full-stack web development refers to the practice of developing both the front-end (client-side) and back-end (server-side) parts of a web application. This includes designing user interfaces, handling databases, server logic, and everything in between.",
  },
  {
    question:
      "What technologies are commonly used in full-stack web development?",
    answer:
      "Common technologies used in full-stack web development include HTML, CSS, JavaScript (or frameworks like React, Angular, Vue.js), Node.js, Express.js, MongoDB (or other databases), and various tools for deployment and testing.",
  },
  {
    question: "How do you ensure security in full-stack web development?",
    answer:
      "To ensure security in full-stack web development, developers should follow best practices such as input validation, using secure authentication methods (like JWT or OAuth), protecting against XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery) attacks, and keeping software dependencies up to date.",
  },
  {
    question:
      "What are the key differences between front-end and back-end development?",
    answer:
      "Front-end development involves creating user interfaces and handling interactions that users see and interact with directly in a web browser. Back-end development focuses on server-side logic, database management, and ensuring the application runs smoothly behind the scenes.",
  },
  {
    question:
      "How can I optimize the performance of a full-stack web application?",
    answer:
      "Optimizing performance involves several techniques such as minifying and bundling JavaScript and CSS files, optimizing images, caching data (both client-side and server-side), using a Content Delivery Network (CDN), and implementing lazy loading where applicable.",
  },
  {
    question:
      "What are some best practices for version control in full-stack web development?",
    answer:
      "Best practices for version control include using a distributed version control system like Git, creating meaningful commit messages, branching strategies (like GitFlow), regular code reviews, and using tools like GitHub, GitLab, or Bitbucket for collaboration.",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqItems.map(({ question, answer }, i) => (
        <Accordion expanded={i === 0} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
