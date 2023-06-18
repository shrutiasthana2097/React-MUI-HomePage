import React from 'react';
import { Box } from "@mui/material";
import ContentItem from './ContentItem';

const contentArray=[
    {
        title:"Get things Done..",
        description:"We’re launching Accenture AI Navigator for Enterprise to help our clients across all industries rapidly and responsibly put the promise and power of AI to work.",
        img:"1.jpg"
    },
    {
        title:"Productivity is Brilliant..",
        description:"We’re launching Accenture AI Navigator for Enterprise to help our clients across all industries rapidly and responsibly put the promise and power of AI to work.",
        img:"2.jpg"
    },
    {
        title:"Fast Development",
        description:"We’re launching Accenture AI Navigator for Enterprise to help our clients across all industries rapidly and responsibly put the promise and power of AI to work.",
        img:"3.jpg"
    }
];
function Content() {
  return (
    <Box 
        bgcolor={"#fbf2f2"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"100%"}
        height={"10%"}>

            {contentArray.map((contentt,index)=>(
                <ContentItem 
                    title={contentt.title}
                    description={contentt.description}
                    key={contentt.index}
                    imsg={contentt.img}>
                </ContentItem>))}
        </Box>
  ) ;
}

export default Content;
