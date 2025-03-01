import { Grid2, Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../mockData/Home";

const DetailPage = () => {
  const { productPath } = useParams();
  const product = productData.find((item) => item.path === productPath);
  return (
    <>
      <Grid2 sx={{ m: 3 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", justifyContent: "center", display: "flex" }}
        >
          Product Page
        </Typography>
        <Box sx={{ w: "20vw", p: 6, backgroundColor: "#bdb9b0" }}>
          <Stack direction="row" spacing={10}>
            <Box>
              <Box
                component="img"
                src={product.image}
                sx={{ width: "30vw", border: "1px solid " }}
              ></Box>
              <Typography
                variant="h6"
                sx={{ ml: 20, mt: 4, fontWeight: "bold" }}
              >
                {product.name}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {product.name}
              </Typography>
              <Typography sx={{ mt: 2 }}>{product.description}</Typography>
              <Typography variant="h6" sx={{ color: "brown", mt: 3 }}>
                {product.price}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "none",
                  width: "25vw",
                  padding: 2,
                  fontSize: "15px",
                  mt: 4,
                }}
              >
                Click To Buy
              </Button>
            </Box>
          </Stack>
        </Box>
      </Grid2>
    </>
  );
};

export default DetailPage;
