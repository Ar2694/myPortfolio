import { Box, Card, styled } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: "unset",
  boxShadow: "none",
  width: "calc(100% / 3)",
  [theme.breakpoints.down('md')]: {
    width: "calc(100% / 2)",
  },
  [theme.breakpoints.down('sm')]: {
    width: "calc(100% / 1)",
  },
  "& .card-container": {
    margin: "0px 15px 20px 15px ",
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[4],
    borderRadius: theme.shape.borderRadius
  },

  "& .view-button": {
    color: "#FFF",

    width: "100%"

  },
  "& .view-button:hover": {
    color: "rgba(255, 255, 255, 0.5)",

  },
  "& .MuiCardMedia-root": {
    marginBottom: "10px"
  },
  "& .title": {
    textAlign: "left",

  }

}));
export default function HomeCard(props) {
  return (
    <StyledCard className={props.className} sx={props.sx}>
      <Box className="card-container">
        {props.children}
      </Box>
    </StyledCard>
  )
}
