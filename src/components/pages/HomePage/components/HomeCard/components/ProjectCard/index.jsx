import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Link, Stack, Typography, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "components/pages/HomePage/components/HomeCard";

import project1 from "./img/bcrs.png";
import project2 from "./img/bobs-computer-repair-shop.png"
import project3 from "./img/in-n-out-books.png";
import project4 from "./img/gpa-calculator-app.png";
import project5 from "./img/angular-composer-app.png";
import project6 from "./img/api-gateway.png";
import project7 from "./img/personalSitePrototype.png";
import project8 from "./img/JSTriva.png";
import project9 from "./img/JSTrivaRepo.png";
import project10 from "./img/web231.png";
import project11 from "./img/web330.png";
import project12 from "./img/web340.png";


const projects = [
    {
        img: project1,
        link: "https://ravenclaw-bcrs.herokuapp.com/#/",
        name: "Bob’s Computer Repair Shop (Final)"
    },
    {
        img: project2,
        link: "https://ar2694.github.io/bobs-computer-repair-shop",
        name: "Bob’s Computer Repair Shop"
    },
    {
        img: project3,
        link: "https://ar2694.github.io/in-n-out-books",
        name: "In-n-Out Books"
    },
    {
        img: project4,
        link: "https://ar2694.github.io/gpa-calculator-app",
        name: "GPA Calculator App"
    },
    {
        img: project5,
        link: "https://ar2694.github.io/enterprise-composer-app/",
        name: "Angular Composer App"
    },
    {
        img: project6,
        link: "https://sorto-api-gateway.herokuapp.com/",
        name: "API Gateway"
    },
    {
        img: project7,
        link: "https://github.com/Ar2694/web-330/blob/master/week-2/sorto-assignment-2.4.pdf",
        name: "Personal Portfolio Prototype"
    },
    {
        img: project8,
        link: "https://dawross.github.io/team-rad/",
        name: "Team Project: JS Trivia"
    },
    {
        img: project9,
        link: "https://github.com/dawross/team-rad",
        name: "Team Project: JS Trivia Repository"
    },
    {
        img: project10,
        link: "https://github.com/Ar2694/web-231",
        name: "WEB-231 Repository"
    },
    {
        img: project11,
        link: "https://github.com/Ar2694/web-330",
        name: "WEB-330 Repository"
    },
    {
        img: project12,
        link: "https://github.com/Ar2694/web-340",
        name: "WEB-340 Repository"
    }
]

export default function ProjectCard(props) {
    return (
        <HomeCard className={`project-card ${props.className}`}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="auto"

                    image={props.img}
                    alt="Project"
                />
                <Typography className="project-title title">{props.name}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="secondary" className="view-button" href={props.link} underline="hover" target="_blank" rel="noopener">
                    View Project
                </Button>
            </CardActions>
        </HomeCard>
    )
}


export function ProjectCardContent(props) {
    return (
        <>
            {projects.map((item, key) => {
                return <ProjectCard key={key} img={item.img} link={item.link} name={item.name} />
            })}
        </>
    )
}
