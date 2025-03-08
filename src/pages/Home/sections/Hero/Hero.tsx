import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "./../../../../assets/images/perfil.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "101vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]:{  //>=mobile
            paddingTop: "150px"
        },
        [theme.breakpoints.up('md')]:{
            paddingTop: "0px"
        }
    }))

    const StyledAvatar = styled("img")(({theme})=>({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledAvatar src={Avatar}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>André Balta</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                        
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton onClick={()=>console.log("download")}>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>    
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton onClick={()=>console.log("download")}>
                                    <EmailIcon/>
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                

                    </Grid>
                </Grid>
            </Container>

        </StyledHero>
      </>
    )
  }
  
  export default Hero
  