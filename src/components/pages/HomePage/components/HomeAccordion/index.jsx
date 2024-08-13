import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Stack, Typography } from "@mui/material";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color ', 'color'], {
    duration: theme.transitions.duration.standard,
  }),
  ":hover": {
    backgroundColor: theme.palette.action.hover,
  },
  ":before": {
    display: "none"
  },

  "&.Mui-expanded": {
    backgroundColor: theme.palette.action.selected,
  },
  "& .MuiSvgIcon-root": {
    fill: theme.palette.primary.contrastText,
  },
  "&.Mui-expanded:first-of-type": {
    marginTop: "0"
  },
  "& .MuiAccordionSummary-root": {
    borderRadius: theme.shape.borderRadius
  },
  "& .MuiStack-root ": {
    width: "100%"
  },
  "& .MuiTypography-root ": {
    display: "block",
    width: "100%",
    textAlign: "center"
  },
  "& .accordion-content": {
    padding: "10px 15px",

  },
  "& .MuiAccordionDetails-root": {
    padding: "0",

  },
}));

export default function HomeAccordion(props) {
  return (
    <StyledAccordion disableGutters={true} elevation={4} >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" alignItems="center" justifyContent="center" >
          {props.icon}
          <Typography>{props.text}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack className="accordion-content" direction="row" alignItems="flex-start" flexWrap="wrap">
          {props.children}
        </Stack>

      </AccordionDetails>
    </StyledAccordion>
  )
}
