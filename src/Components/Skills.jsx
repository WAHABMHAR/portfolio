import { Box, Typography, Grid, Stack, styled } from '@mui/material'
import React from 'react'

const Skills = () => {
  return (
    <Box id="skils" bgcolor="#142033" height="100%" paddingTop={30}  >
      <Typography variant="h3" color="white" fontWeight="bolder" textAlign="center" fontSize={{xs:40,sm:50,xl:50}} paddingRight={{xs:0,xl:10}} paddingBottom={{xs:5,xl:0}}>  My <span style={{ color: "#00abf0" }}> Skills</span> </Typography>


      <Grid container xl={12} sx={{ padding: {xs:"0 0  0 8% ",md:"0 15% 0 17%",lg:"3% 25% 0 25%",xl:"3% 10% 0 10%"}, }}>
        <Grid item xl={6} md={12}>
          <Typography variant="h3" color="white" fontWeight="bolder" textAlign={{xs:"center"}} fontSize={{xs:25,sm:30,xl:30}}  letterSpacing={2} paddingBottom={{xs:3,xl:5}} >Coding Skills</Typography>
          <Box border="1px solid #00abf0" alignSelf="center" width={{xs:"300px",sm:"500px",md:"600px",xl:"600px"}} height={{xs:"350px",sm:"450px",xl:"500px"}} borderRadius="10px" position="relative"
            padding={5}

            sx={{

              "::before": {
                content: '""',
                width: "0%",
                height: "100%",
                position: "absolute",
                bgcolor: "#00abf0",
                top: "0px",
                left: "0px",
                transition: "0.5s ",
                opacity: ".1"


              },
              "&:hover::before": {
                width: "100%"
              }

            }}

          >
            <Stack spacing={{xs:4, md:6,xl:8}}>
            <Box> 
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>Html & CSS & Material UI</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>90%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",sm:"100%",xl:"100%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "90%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>Javascript</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>70%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "70%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>React JS ,Node JS,Express JS & MonogoDB</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>80%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "80%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>Solidity & Ether JS</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>90%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "90%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            </Stack>

          </Box>
        </Grid>
        <Grid item xl={6} md={12}>
        <Typography variant="h3" color="white" fontWeight="bolder" textAlign={{xs:"center"}} fontSize={{xs:25,sm:30,xl:30}}letterSpacing={2} paddingTop={{xs:5,sm:7,xl:0}} paddingBottom={{xs:3,xl:5}}  >Professional Skills</Typography>
          <Box border="1px solid #00abf0" width={{xs:"300px",sm:"500px",md:"600px",xl:"600px"}} height={{xs:"350px",sm:"450px",xl:"500px"}} borderRadius="10px" position="relative"
            padding={5}

            sx={{

              "::before": {
                content: '""',
                width: "0%",
                height: "100%",
                position: "absolute",
                bgcolor: "#00abf0",
                top: "0px",
                left: "0px",
                transition: "0.5s ",
                opacity: ".1"


              },
              "&:hover::before": {
                width: "100%"
              }

            }}

          >
            <Stack spacing={{xs:4,md:6,xl:8}}>
            <Box> 
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>MERN Stack Developer</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>90%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "90%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>Blockchain Developer</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>60%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "60%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>DEFI Developer</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>75%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "75%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>Smart Contract Developer</Typography>
                <Typography variant="h5" color="white" fontWeight="bold" fontSize={{xs:13,sm:20,xl:20}}>85%</Typography>
              </Box>
              <Box border="1px solid #00abf0" width={{xs:"80",xl:"90%"}} bgcolor="#142033" position="relative" zIndex={1} mt={1} borderRadius={5} height={{xs:15,sm:20,xl:20}}
                sx={{

                  "::before": {
                    content: '""',
                    width: "85%",
                    height: "70%",
                    position: "absolute",
                    bgcolor: "#00abf0",
                    borderRadius: "5px",
                    top: "2px",
                    left: "3px",
                    zIndex: "-1",
                  }
                }}
              ></Box>
            </Box>
            </Stack>

          </Box>

        </Grid>
      </Grid>

    </Box>

  )
}

export default Skills