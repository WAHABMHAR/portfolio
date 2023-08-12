<Box color="white" width={{xs:"12rem",md:"20rem"}} height={{xs:"12rem",md:"20rem"}}  borderRadius="50%" position="relative" display="flex" alignContent="center" justifyContent="center" alignItems="center" zIndex="1" >
<img src={myImage} alt="my_image" width="90%" style={{ borderRadius: "50%" }} />


  <Box

    component="span" 
    width="100%" height= "100%"

    sx={{
      position: "absolute",   borderRadius: "50%",
      borderTop: '2px solid #142033',
      borderBottom: '2px solid #142033',
      borderLeft: '2px solid #00abf0',
      borderRight: '2px solid #00abf0',
      animation: 'rotation 3s linear infinite',
      '@keyframes rotation': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      transformOrigin: "center",
    }}
    ></Box>

</Box>