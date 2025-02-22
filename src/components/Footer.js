import React from "react";

const Footer = () => {
  return (
    <div style={Styles.container}>
      <div style={Styles.mainContainer}>
        <div>
          <p style={Styles.headPara}>Help</p>
          <p style={Styles.para}>Account</p>
          <p style={Styles.para}>Store</p>
          <p style={Styles.para}>Contact Us</p>
        </div>
        <div>
          <p style={Styles.headPara}>Offers</p>
          <p style={Styles.para}>Bumper Offer</p>
          <p style={Styles.para}>Sale</p>
          <p style={Styles.para}>Last Chance</p>
        </div>
        <div>
          <p style={Styles.headPara}>Products</p>
          <p style={Styles.para}>Watch</p>
          <p style={Styles.para}>NeckBands</p>
          <p style={Styles.para}>Speakers</p>
          <p style={Styles.para}>Headphones</p>
          <p style={Styles.para}>Buds</p>
        </div>
      </div>
      <div style={Styles.hrDivTag}>
        <hr style={Styles.hrTag}></hr>
      </div>
      <div style={Styles.footerLast}>
        <p style={Styles.footerPara}>© 2024, Gadgets Inc.</p>
        <p style={Styles.footerPara}>Privacy </p>
        <p style={Styles.footerPara}>Terms </p>
        <p style={Styles.footerPara}>Security </p>
        <p style={Styles.footerPara}>Cookie Settings </p>
      </div>
    </div>
  );
};

export default Footer;

const Styles = {
  mainContainer: {
    display: "flex",
    gap: "10rem",
    marginTop: "80px",
    justifyContent: "center",
    paddingTop: "20px",
  },
  hrDivTag: {
    display: "flex",
    justifyContent: "center",
  },
  headPara: {
    color: "white",
    fontSize: "20px",
    marginLeft: "8rem",
    marginRight: "4rem",
  },
  para: {
    color: "white",
    marginLeft: "8rem",
    marginRight: "4rem",
  },
  container: {
    backgroundColor: "black",
    height: "500px",
  },
  hrTag: {
    width: "80%",
    marginTop: "8rem",
  },
  footerLast: {
    display: "flex",
    gap: "5rem",
    paddingTop: "10px",
    // marginLeft: "19rem",
    justifyContent: "center",
    // marginRight: "10rem",
  },
  footerPara: {
    color: "white",
    fontSize: "13px",
  },
};
