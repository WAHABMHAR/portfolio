import { Box, Typography, Container, Grid, Stack } from '@mui/material'
import styled from '@emotion/styled'
import React from 'react'

const Education = () => {
  const StyledBox = styled(Box)`
  display:flex;
  flex-direction:column;
  width: 600px;
  height: 170px;
  // background-color: red;
  border:1px solid #00abf0;
  border-radius:5px;
  z-index: 1; 
  position: relative;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: #00abf0;
    border-radius: 50%;
    top: -1px;
    left: -94px;
  }

  &::after {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #00abf0;
    opacity:0.1;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;



  return (
    <Box id="education" bgcolor="#142033" height="100%" width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignSelf="center" paddingTop={{ xs:15, xl: 20 }} paddingLeft={{xs:5,sm:15,lg:10,xl:15}}>
      <Box width={{ md: "70%", xl: "100%" }} height="100%" marginTop={{ md: "45px", xl: "60px" }} >

        <Grid spacing={10} container xl={12} justifyContent="center" alignItems="center" position="relative"


        // sx={{

        //   "::before": {
        //     content: '""',
        //     width: {md:"0", xl:"2px"},
        //     height: "90%",
        //     position: "absolute",
        //     bgcolor: "#00abf0",
        //     top: "80px",
        //     left: "762px"
        //   },
        //   "::after": {
        //     content: '""',
        //     width: "2px",
        //     height: "90%",
        //     position: "absolute",
        //     bgcolor: "#00abf0",
        //     top: "80px",
        //     left: "1px"
        //   }
        // }}


        >
          <Grid container item md={12} xl={6} spacing={3}
          >
            {/*  */}
            <Grid item xl={12} 

            >
              <Box component="span"
                width="2px"
                height={{sm:"35%",xl:"68%"}}
                marginTop={28}
                bgcolor="#00abf0"
                position="absolute"
                top="0px"
                left="1px"

              ></Box>
              <Typography variant="h3" color="white" marginLeft={{ md: 5, xl: 4 }} marginBottom={{xs:4,sm:10}} fontWeight="bolder" fontSize={{xs:25,sm:40}}>Education</Typography>
              <StyledBox sx={{width:{xs:"280px",sm:"380px !important",md:"600px !important",lg:"700px !important" ,xl:"600px !important"},height:{xs:"210px",sm:"210px !important",md:"170px !important"}}}>
                <Box display="flex" paddingTop={2} paddingLeft={2}>
                  <Box component="span" width="20px" height="20px" marginRight={2} borderRadius="5px" bgcolor="#00abf0"> </Box>
                  <Typography variant="body1" color="#00abf0"
                  >2017 - 2018</Typography>
                </Box >
                <Box paddingLeft={5} paddingTop={1}>
                  <Typography variant="h5" color="white" fontWeight="bolder" letterSpacing={1} fontSize={{xs:15,sm:20}}> Matric Degree</Typography>
                  <Box component="p" width={{xs:"230px",sm:"320px",md:"450px"}} height="100px" fontSize={{xs:"12px",sm:"16px"}} color="white" lineHeight={1.5} letterSpacing={1} fontWeight="light" pt={1}>
                    I have completed my Matric Degree From Govt Allama Iqbal High School. I have got good Marks in Matic Exams.
                  </Box>

                </Box>

              </StyledBox>
            </Grid>
            <Grid item xl={12}>
              <StyledBox  sx={{width:{xs:"280px",sm:"380px !important",md:"600px !important",lg:"700px !important" ,xl:"600px !important"},height:{sm:"210px !important",md:"170px !important"}}} >
                <Box display="flex" paddingTop={2} paddingLeft={2}>
                  <Box component="span" width="20px" height="20px" marginRight={2} borderRadius="5px" bgcolor="#00abf0"> </Box>
                  <Typography variant="body1" color="#00abf0"
                  >2019 - 2020</Typography>
                </Box >
                <Box paddingLeft={5} paddingTop={1}>
                  <Typography variant="h5" color="white" fontWeight="bolder" letterSpacing={1} fontSize={{xs:15,sm:20}}> Intermediate Degree</Typography>
                  <Box component="p" width={{xs:"230px",sm:"320px",md:"450px"}} height="100px" color="white" fontSize={{xs:"12px",sm:"16px"}} lineHeight={1.5} letterSpacing={1} fontWeight="light" pt={1}>
                    I have completed my Intermediate Degree From Govt Post-Graduate College Of Science. I have got good Marks in Intermediate Exams.
                  </Box>
                </Box>

              </StyledBox>

            </Grid>
            <Grid item xl={12}>
              <StyledBox sx={{width:{xs:"280px",sm:"380px !important",md:"600px !important",lg:"700px !important" ,xl:"600px !important"},height:{sm:"210px !important",md:"170px !important"}}}>
                <Box display="flex" paddingTop={2} paddingLeft={2}>
                  <Box component="span" width="20px" height="20px" marginRight={2} borderRadius="5px" bgcolor="#00abf0"> </Box>
                  <Typography variant="body1" color="#00abf0"
                  >2021 - 2020</Typography>
                </Box >
                <Box paddingLeft={5} paddingTop={1}>
                  <Typography variant="h5" color="white" fontWeight="bolder" letterSpacing={1} fontSize={{xs:15,sm:20}}>BSC.Computer Science</Typography>
                  <Box component="p" width={{xs:"230px",sm:"320px",md:"450px"}} height="100px" color="white" fontSize={{xs:"12px",sm:"16px"}} lineHeight={1.5} letterSpacing={1} fontWeight="light" pt={1}>
                    I am doing my BSC.Computer Science from Virtual University also doing job in a Bloctech Solutions Company.
                  </Box>

                </Box>

              </StyledBox>
            </Grid>
          </Grid>
          {/* ////////////////////// */}
          <Grid container item md={12} xl={6} spacing={3} 
            
          >
            <Grid item xl={12}>
              <Box component="span"
                width="2px"
                height={{sm:"35%",xl:"68%"}}
                marginTop={28}
                bgcolor="#00abf0"
                position="absolute"
                top={{sm:"50%",md:"50%",xl:"0px"}}
                left={{sm:"0px",md:"1px",xl:"50%"}}

              ></Box>
              <Typography variant="h3" color="white" fontWeight="bolder" marginBottom={{xs:4,sm:10}} fontSize={{xs:25,sm:40}}>Experience</Typography>
              <StyledBox sx={{width:{xs:"280px",sm:"380px !important",md:"600px !important",lg:"700px !important" ,xl:"600px !important"},height:{sm:"210px !important",md:"170px !important"}}}>
                <Box display="flex" paddingTop={2} paddingLeft={2}>
                  <Box component="span" width="20px" height="20px" marginRight={2} borderRadius="5px" bgcolor="#00abf0"> </Box>
                  <Typography variant="body1" color="#00abf0"
                  >2021 - 2023</Typography>
                </Box >
                <Box paddingLeft={5} paddingTop={1}>
                  <Typography variant="h5" color="white" fontWeight="bolder" letterSpacing={1} fontSize={{xs:15,sm:20}}>Web Developer</Typography>
                  <Box component="p" width={{xs:"230px",sm:"320px",md:"450px"}} height="100px" color="white" fontSize={{xs:"12px",sm:"16px"}} lineHeight={1.5} letterSpacing={1} fontWeight="light" pt={1}>
                    I have learned MERN Stack Development from Gamica Cloud. And Got Certificate from  there. Also Do Multiple Projects as Intership Work.
                  </Box>
                </Box>

              </StyledBox>

            </Grid>
            <Grid item xl={12}>
              <StyledBox  sx={{width:{xs:"280px",sm:"380px !important",md:"600px !important",lg:"700px !important" ,xl:"600px !important"},height:{sm:"210px !important",md:"170px !important"}}}>
                <Box display="flex" paddingTop={2} paddingLeft={2}>
                  <Box component="span" width="20px" height="20px" marginRight={2} borderRadius="5px" bgcolor="#00abf0"> </Box>
                  <Typography variant="body1" color="#00abf0"
                  >2021 - 2023</Typography>
                </Box >
                <Box paddingLeft={5} paddingTop={1}>
                  <Typography variant="h5" color="white" fontWeight="bolder" letterSpacing={1} fontSize={{xs:15,sm:20}}> Blockchain Development</Typography>
                  <Box component="p" width={{xs:"240px",sm:"320px",md:"450px"}} height="100px" color="white" fontSize={{xs:"12px",sm:"16px"}} lineHeight={1.5} letterSpacing={1} fontWeight="light" pt={1}>
                    I also Completed my Blockchain Development Course from Gamica Cloud.and do Intership in Bloctech Solutions Company and Work on Multiple Projects.
                  </Box>

                </Box>

              </StyledBox>
            </Grid>
            <Grid item xl={12}>
              <StyledBox  sx={{width:{xs:"280px",sm:"380px !important",md:"600px !important",lg:"700px !important" ,xl:"600px !important"},height:{sm:"210px !important",md:"170px !important"}}}>
                <Box display="flex" paddingTop={2} paddingLeft={2}>
                  <Box component="span" width="20px" height="20px" marginRight={2} borderRadius="5px" bgcolor="#00abf0"> </Box>
                  <Typography variant="body1" color="#00abf0"
                  >2023 - 2024</Typography>
                </Box >
                <Box paddingLeft={5} paddingTop={1}>
                  <Typography variant="h5" color="white" fontWeight="bolder" letterSpacing={1} fontSize={{xs:15,sm:20}}>Certified DEFI Developer</Typography>
                  <Box component="p" width={{xs:"230px",sm:"320px",md:"450px"}} height="100px" color="white" fontSize={{xs:"12px",sm:"16px"}} lineHeight={1.5} letterSpacing={1} fontWeight="light" pt={1}>
                    I am currently Working on Real Projects of Clients and Expand my Knowledge.
                  </Box>

                </Box>

              </StyledBox>
            </Grid>
          </Grid>


        </Grid>
      </Box>



    </Box>
  )
}

export default Education