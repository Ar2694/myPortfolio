import { Chip, CardContent, CardHeader, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "components/pages/HomePage/components/HomeCard";
import { faCss3Alt, faGitAlt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';



export default function SkillCard(props) {
    return (
        <HomeCard className={`skill-card ${props.className}`} sx={{

            "& .MuiCardHeader-avatar": {
                margin: "0",

            },
            "& .MuiCardHeader-root": {
                padding: "16px 0px 4px 16px"
            },
            "& .icon": {
                height: "3rem",
                width: "3rem"
            },
            "& .chip": {
                color: "#FFFFFF",
                margin: "3px"
            },
            "&.html .icon": {
                color: "#F06734"
            },
            " &.html .chip": {
                backgroundColor: "#F06734"
            },
            "&.css .icon": {
                color: "#14A0DB"
            },
            " &.css .chip": {
                backgroundColor: "#14A0DB"
            },
            "&.js .icon": {
                color: "#FDDB22"
            },
            "&.js .chip": {
                backgroundColor: "#FDDB22",
                color: "#000"
            },
            "&.database .icon": {
                color: "#ABABAB"
            },
            "&.database .chip": {
                backgroundColor: "#ABABAB",
                color: "#000"
            },
            "&.git .icon": {
                color: "#E44C31"
            },
            "&.git .chip": {
                backgroundColor: "#E44C31"
            },
            "& .MuiCardContent-root": {

            },
        }}>
            <CardHeader avatar={<FontAwesomeIcon className="icon" icon={props.icon} />} />
            <CardContent>
                <Stack direction="row" flexWrap="wrap" justifyItems="flex-start">
                    {props.children}
                </Stack>
            </CardContent>
        </HomeCard>
    )
}


export function SkillCardContent() {
    return (
        <>
            <SkillCard className="html" icon={faHtml5}>
                <Chip className="chip" label="HTML" />
                <Chip className="chip" label="HTML5" />
            </SkillCard>
            <SkillCard className="css" icon={faCss3Alt}>
                <Chip className="chip" label="CSS" />
                <Chip className="chip" label="CSS3" />
                <Chip className="chip" label="Bootstrap" />
                <Chip className="chip" label="Material UI" />
            </SkillCard>
            <SkillCard className="js" icon={faJs}>
                <Chip className="chip" label="JavaScript" />
                <Chip className="chip" label="React" />
                <Chip className="chip" label="Angular" />
                <Chip className="chip" label="Express" />
                <Chip className="chip" label="JQuery" />
                <Chip className="chip" label="JSON" />
                <Chip className="chip" label="Node" />
            </SkillCard>
            <SkillCard className="database" icon={faDatabase}>
                <Chip className="chip" label="MongoDB" />
                <Chip className="chip" label="REST" />
            </SkillCard>
            <SkillCard className="git" icon={faGitAlt}>
                <Chip className="chip" label="Git" />
                <Chip className="chip" label="GitHub" />
                <Chip className="chip" label="Heroku" />
            </SkillCard>
        </>
    )
}