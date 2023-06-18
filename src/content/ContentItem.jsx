import { Box, Typography } from '@mui/material';
import React from 'react';

const ContentItem = ({title, description, imsg}) => {
    return (
        <>
        <Box padding={10} justifyContent={"center"} alignItem={"center"}>
            <Box>
                <Typography color={"#734950"} padding={3} variant='h3'>{title}</Typography>
                <Typography padding={3} variant='caption'>{description}</Typography>
                </Box>
        <img src={imsg} alt={title} loading={"lazy"} width="50%" style = {{
            boxShadow:"10px 10px 20px #ccc",
            marginLeft:"10%",
            borderRadius:20}} height={"300px"}/>
        </Box>
        </>);
}

export default ContentItem;


