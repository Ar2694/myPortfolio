import { Box, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import HomeCard from "components/pages/HomePage/components/HomeCard";

// Diagrams
import diagram0 from "./img/ORD-Model1.jpg";
import diagram1 from "./img/ORD-Model-2.2.jpg";
import diagram2 from "./img/ORD-Model-2.3.jpg";
import diagram3 from "./img/ORD-Model-3.2.jpg";
import diagram4 from "./img/ORD-Model-3.3.jpg";
import diagram5 from "./img/noSQL-Model.png";
import diagram6 from "./img/noSQL-Model-2.2.png";
import diagram7 from "./img/noSQL-Model-2.3.png";
import diagram8 from "./img/noSQL-Model-3.3.png";
import diagram9 from "./img/NoSQL-Diagram-3.3.jpg";
import DiagramModal from "./components/DiagramModal";


const diagrams = [
    {
        name: "ORD Model",
        img: diagram0
    },
    {
        name: "ORD Model 2.2",
        img: diagram1
    },
    {
        name: "ORD Model 2.3",
        img: diagram2
    },
    {
        name: "ORD Model 3.2",
        img: diagram3
    }, {
        name: "ORD Model 3.3",
        img: diagram4
    },
    {
        name: "NoSQL Diagram 3.3",
        img: diagram9
    },
    {
        name: "NoSQL model",
        img: diagram5
    },
    {
        name: "NoSQL model 2.2",
        img: diagram6
    },
    {
        name: "NoSQL model 2.3",
        img: diagram7
    },
    {
        name: "NoSQL model 2.4",
        img: diagram8
    }
];

export default function DiagramCard(props) {
    return (
        <HomeCard sx={{
            color: "#FFF",
            "& .MuiCardMedia-root":{
                marginBottom: "10px"
            },
  
            "& .diagram-title":{
                textAlign: "left",
        
            }
        }} className={`diagram-card ${props.className}`}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="140px"
                    image={props.img}
                    alt="Project"
                />

                <Typography className="diagram-title">{props.name}</Typography>
            </CardContent>
            <CardActions>
                <DiagramModal {...props} />
            </CardActions>
        </HomeCard>
    )
}


export function DiagramCardContent(props) {
    return (
        <>
            {diagrams.map((item, key) => {
                return <DiagramCard key={key} img={item.img} name={item.name} />
            })}
        </>
    )
}
