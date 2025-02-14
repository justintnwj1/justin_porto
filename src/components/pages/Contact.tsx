import React from "react";
import MenuItem from '@mui/material/MenuItem';
import whatsappImg from '../../assets/WhatsApp_icon.png';
import gmailImg from '../../assets/gmail.png';
import linkedinImg from '../../assets/linkedin.png';

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="pictureContact">
        <img src={whatsappImg} className="imagePicture"alt="WhatsApp" style={{ width: '30px', height: 'auto' }} />
        +6281211107650
      </div>
      <div className="pictureContact">
        <img src={gmailImg} className="imagePicture"alt="Email" style={{ width: '30px', height: 'auto' }} />
         justintnwj2@gmail.com
      </div>
      <div className="pictureContact">
        <img src={linkedinImg} className="imagePicture"alt="Linkedin" style={{ width: '30px', height: 'auto' }} />
         justintnwj
      </div>
    </div>
  );

}