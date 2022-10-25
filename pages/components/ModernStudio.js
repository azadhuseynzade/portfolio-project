import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "../../styles/ModernStudio.module.css";
import Image from "next/image";
import MetaImg from "../assets/meta-img.png";
import StarImg from "../assets/Star.png";
import RightSide from "../assets/pic.svg";

const ModernStudio = () => {
  return (
    <Box className={styles.mainModernDiv}>
      <Box className={styles.firstBox}>
        <Typography className={styles.modernTitle} variant="h5">
          Modern Studio
        </Typography>
        <Typography className={styles.dreamText} variant="h1">
          We’re Help
          <br /> To Build Your Dream Project
        </Typography>
        <Box className={styles.star}>
          <Image src={StarImg} width={148} height={148} alt="star" />
        </Box>

        <Typography className={styles.agencyProvides}>
          Agency provides a full service range including technical <br />
          skills, design, business understanding.
        </Typography>
        <Box sx={{ marginTop: "30px" }}>
          <Button className={styles.howWorkBtn}>How We Work</Button>
          <Button className={styles.contactBtn}>Contact Us</Button>
        </Box>
        <Box className={styles.metaSide}>
          <Box>
            <Image
              className={styles.metaImg}
              src={MetaImg}
              width={48}
              height={48}
              alt="meta-img"
            />
          </Box>
          <Box sx={{ marginLeft: "15px" }}>
            <Typography className={styles.puttext} variant="subtitle1">
              Put themselves in the merchants shoes
            </Typography>
            <Typography className={styles.incText} variant="subtitle2">
              Meta Inc.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.secondBox}>
        <Image src={RightSide} width={570} height={602} alt="rightSide" />
      </Box>
    </Box>
  );
};

export default ModernStudio;
