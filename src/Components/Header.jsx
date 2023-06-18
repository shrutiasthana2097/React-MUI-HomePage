import { AppBar, Button, Link, Tab, Tabs, Typography } from "@mui/material";
import { Box, Toolbar } from '@mui/material';
import WebhookIcon from '@mui/icons-material/Webhook';
const links=['Products','Solutions','Pricing','Enterprise']
function Header() {
  return (<>
    <AppBar sx={{bgcolor:"transparent", boxShadow:"0"}}>
       <Toolbar>
      <Box sx={{display:"flex",width:"100%", alignItems:"center"}}>
        <WebhookIcon sx={{color:"black"}}></WebhookIcon>
      
      <Box> 
        <Tabs component={Link} sx={{textDecoration:"none"}}>
          {links.map((link,index)=>{
            return <Tab sx={{fontWeight:"bold", textDecoration:"none",":hover":{
              textDecoration:"underline",
              textUnderlineOffset:"5px"
            }}} key={index} label ={link}></Tab>
          })}
        </Tabs>
      </Box>
      <Box sx={{display:"flex",marginLeft:"auto"}}>
        <Button variant="outlined" sx={{marginRight:2}}>Talk to Us</Button>
        <Button variant="contained" sx={{marginLeft:2}}>Try for Me</Button>
      </Box>
      </Box>
      </Toolbar>
      </AppBar>
      <Box width="100%" height="100vh">
        <video 
            width={"100%"} 
            height="70%" 
            autoPlay 
            loop 
            muted 
            playsInline 
            src="/video.mp4">
        </video>
        <Box  width={"100%"} 
            display="flex">
          <Typography margin={"auto"}
          variant="h4"
          color="black"
          textAlign={"center"}>Build your Softwares Hassle Free and with Top notch quality</Typography>
            </Box>
        <Box  width={"100%"} 
            display="flex"
            justifyContent={"center"} 
           margin={"auto"}
           marginTop={5}>
          <Button variant="outlined" sx={{mr:3}}> Sign up with Email</Button>
          <Button variant="contained" sx={{ml:3}}> Sign up with Google</Button>
        </Box>
      </Box>
      </>
    
  );
}

export default Header;
