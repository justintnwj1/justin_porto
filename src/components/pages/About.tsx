import React from "react";
import viteImg from "../../assets/vite.png";
import htmlImg from "../../assets/html.png";
import reactImg from "../../assets/react.png";
import jwtImg from "../../assets/jwt.png";
import pythonImg from "../../assets/python.png";
import koyebImg from "../../assets/koyeb.png";
import vercelImg from "../../assets/vercel.png";
import nodeImg from "../../assets/node.png";
import expressImg from "../../assets/express.png";
import bootstrapImg from "../../assets/bootstrap.png";
import postImg from "../../assets/post.png";
import githubImg from "../../assets/github.png";

export default function About() {
    const imageSources = [
        htmlImg,
        pythonImg,
        expressImg,
        nodeImg,
        jwtImg,
        reactImg,
        viteImg,
        bootstrapImg,
        postImg,
        githubImg,
        vercelImg,
        koyebImg,
    ];
    return (
        <div className="aboutPage">
            <div className="about">
                <p>
                    Hello I'm Justin graduted at Trisakti University, Strong professional with a Bachelor's degree focused in Engineering from Trisakti University.
                </p>

                <p>
                    I have completed the Fullstack Web Development bootcamp at Synrgy Academy, where I mastered programming languages such as React, HTML, CSS, Python, and JavaScript. I have hands-on experience with PostgreSQL for database projects.

                    I employ Bootstrap as my primary CSS framework and have developed projects using Express.js and Node.js. I'm proficient in deploying applications, utilizing platforms like Vercel and Koyeb.

                    Driven by a deep passion for programming, I am eager to further explore this dynamic field. Please feel free to reach out to discuss programming, collaborate on web or mobile projects, or explore opportunities for partnership.

                    I am actively seeking new opportunities in programming and would be thrilled to hear from anyone looking to offer me a position in this exciting field.
                </p>
            </div>

            <div className="borderAbout">
                
            </div>

            <div className="imageLogo">
            {imageSources.map((src, index) => (
                <img key={index} src={src} alt={`Logo ${index}`} className="logo-img" />
            ))}
        </div>

        </div>

    );

}