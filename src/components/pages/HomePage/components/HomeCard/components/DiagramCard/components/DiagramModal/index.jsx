import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, styled } from "@mui/material";
import DialogProvider, { useDialogContext } from "contexts/DialogContext"
import CloseIcon from '@mui/icons-material/Close';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
        backgroundColor: "rgba(33, 33, 33, 0.95)",
        color: "#FFF",
        borderRadius: theme.shape.borderRadius
    },
    "& .icon-button, & .close-button": {
        color: "#FFF",
    },
    "& .icon-button": {
        padding: 0
    },
    "& .icon-button:hover, & .close-button:hover": {
        color:  "rgba(255, 255, 255, 0.5)",
    
    },
    "& .icon-button:hover": {
        color:  "rgba(255, 255, 255, 0.5)",
    },
    "& .MuiDialogActions-root": {
        padding: "20px 24px",
    },
}));

export default function DiagramModal(props) {
    return (
        <DialogProvider button={<Button variant="outlined" color="secondary" className="view-button">View Diagram</Button>}>
            <DiagramModalContent {...props} />
        </DialogProvider>
    )
}

function DiagramModalContent(props) {
    const { dialog, close } = useDialogContext();
    return (
        <StyledDialog color="secondary" open={dialog} maxWidth="md" fullWidth={true}>
            <DialogTitle component={Stack} direction="row" >
                <Box flexGrow={1}>
                    {props.name}
                </Box>
                <IconButton className="icon-button" onClick={close}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <CardMedia
                    component="img"
                    image={props.img}
                    alt="Diagram"
                />
            </DialogContent>
            <DialogActions>
          <Button className="close-button" variant="outlined" color="secondary" onClick={close}>Close</Button>

        </DialogActions>
        </StyledDialog>
    )
}
