import React from 'react'
import HomeCard from '../..'
import { CardActions, CardContent, CardMedia, Typography } from '@mui/material'


import Hypermedia from "./videos/sorto-presentation-6.2.mp4";
import Json from "./videos/sorto-presentation-4.2.mp4";
import Microservices from "./videos/sorto-presentation-8.3.mp4";
import OauthSecurity from "./videos/sorto-presentation-9.2.mp4";
import Rest from "./videos/sorto-RESTful-APIs.mp4";
import SoaEsb from "./videos/sorto-presenation-7.2.mp4";
import Soap from "./videos/sorto-SOAP-3.2.mp4";


const restVideos = [
    {
        video: Hypermedia,
        name: "Hypermedia"
    },
    {
        video: Json,
        name: "JSON"
    },
    {
        video: Microservices,
        name: "Microservices"
    },
    {
        video: OauthSecurity,
        name: "OAuth Security"
    },
    {
        video: Rest,
        name: "RESTful APIs"
    },
    {
        video: SoaEsb,
        name: "Service-Oriented Architecture & Enterprise Service Bus"
    },
    {
        video: Soap,
        name: "Soap"
    }
]
export default function RestCard(props) {
    return (
        <HomeCard className={`rest-card ${props.className}`}>
            <CardContent>
                <CardMedia
                    component="video"
                    controls
                    height="auto"
                    src={props.video}
                    alt="Rest"
                />
                <Typography className="rest-title title">{props.name}</Typography>
            </CardContent>
        </HomeCard>
    )
}


export function RestCardContent() {

    return (
        <>
            {restVideos.map((item, key) => {
                return <RestCard key={key} name={item.name} video={item.video} />
            })}

        </>
    )
}