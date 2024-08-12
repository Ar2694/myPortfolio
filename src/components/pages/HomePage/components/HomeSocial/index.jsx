import { IconButton, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from '@mui/icons-material';


export default function HomeSocial(props) {
    return (
        <Stack sx={{
            marginBottom:"20px",
            "& .icon-button": {
                color: "#FFF",
            },
            "& .icon": {
                fontSize: "2rem"
            }

        }} direction="row" justifyContent="center">
            <IconButton className="icon-button" href="https://github.com/Ar2694" target="_blank" rel="noopener">
                <GitHubIcon className="icon" />
            </IconButton>
            <IconButton className="icon-button" href="https://linkedin.com/in/arlix-sorto-680a2a20b" target="_blank" rel="noopener">
                <LinkedInIcon className="icon" />
            </IconButton>
            <IconButton className="icon-button" href="https://www.instagram.com/asnow94/" target="_blank" rel="noopener">
                <Instagram className="icon" />
            </IconButton>
        </Stack>
    )
}
