import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import DevicesIcon from '@mui/icons-material/Devices';

const StyledStack = styled(Stack)(({ theme }) => ({
    margin: "70px 0 50px 0",
    "& .MuiAvatar-root": {
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[10],
        marginBottom: 15,
        width: "100px",
        height: "100px",
 
    },
    "& .MuiAvatar-root .icon": {
        width: "50px",
        height: "50px"
    },
    "& .avatar-container": {
        textAlign: "center",
        marginBottom: 10
    },
    "& .text-container": {
        textAlign: "center"
    },
    "& .text-container span": {
        margin: "0 3px"
    }
}));

export default function HomeAvatar(props) {
    return (
        <StyledStack className="home-avatar" direction="column" alignItems="center" justifyContent="center">
            <Box className="avatar-container">
                <Avatar>
                    <DevicesIcon className="icon" />
                </Avatar>
            </Box>
            <Box flexGrow={1} className="text-container">
                <Typography variant="h6">Arlix Sorto <span>|</span> Web developer</Typography>
            </Box>




        </StyledStack>
    )
}
