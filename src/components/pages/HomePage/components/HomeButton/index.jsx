import { styled } from '@mui/material/styles';
import { Button, Typography } from "@mui/material";

import MyResume from "res/pdf/Arlix-Sorto.pdf"

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginBottom: "50px!important",
  ":hover": {
    backgroundColor: theme.palette.action.hover
  },
  padding: "12px 16px",
  boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  "& .MuiButton-icon": {

    margin: "0",
    fontSize: "1.5rem"
  },
  "& .MuiButton-icon .MuiSvgIcon-root": {
    fontSize: "unset"
  },
  "& .MuiTypography-root ": {
    display: "block",
    width: "100%",
    textAlign: "center",
    textTransform: "capitalize"
  }
}));

export default function HomeButton(props) {
  return (
    <StyledButton startIcon={props.startIcon} endIcon={props.endIcon} elevation={4} variant="contained" href={MyResume} underline="hover" target="_blank" rel="noopener" disableRipple>
      <Typography>{props.text}</Typography>
      {props.children}
    </StyledButton>
  )
}
