<Stack spacing={5} direction="row" pt={4}>
                                <Button disableRipple variant="contained" sx={{
                                    position:"relative",
                                    background: "#00abf0", color: 'black',zIndex:"1",overflow:"hidden", fontWeight: "bolder", letterSpacing: "1px", padding: "15px 30px 15px 30px", transition: "0.5s ease",
                                    "::before":{
                                        content:'""',
                                        width:"0",
                                        height:"100%",
                                        background:"#00abf0",
                                        zIndex:"-1",
                                        position:"absolute",
                                        overflow:"hidden",
                                        top:"0",
                                        left:"0",
                                        transition: "1s"

                                    },
                                    "&:hover::before": {
                                        width:"100%",
                                       
                                    },
                                    "&:hover":{
                                        bgcolor:"transparent",
                                        border: '1px solid #00abf0',
                                        color: 'black',
                                        cursor: "pointer"
                                    }
                                }}>
                                    Hire ME
                                </Button>
                                <Button disableRipple variant="outlined" sx={{
                                    fontWeight: "bolder", letterSpacing: "1px", padding: "15px 30px 15px 30px", transition: "0.5s ease",
                                    zIndex:"1",position:"relative",
                                    "::before":{
                                        content:'""',
                                        width:"0",
                                        height:"100%",
                                        background:"#00abf0",
                                        zIndex:"-1",
                                        position:"absolute",
                                        overflow:"hidden",
                                        top:"0",
                                        left:"0",
                                        transition: "1s"

                                    },
                                    "&:hover::before":{
                                        width:"100%"
                                    },
                                    "&:hover": {
                                        bgcolor: "#00abf0",
                                        border: '1px solid "#00abf0"',
                                        color: 'black',
                                        cursor: "pointer"

                                    }
                                }}>
                                    Let`s Talk
                                </Button>

                            </Stack>