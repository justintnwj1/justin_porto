import { colors } from "@mui/material";

export default function MyProject() {
    return (
        <div className="myProjectPage">
            <div>
                <h2 className="myProjectHeader">Binar Car Rental</h2>
                <div className="borderAbout">

                </div>
                <p>Link Website Binar Car Rental :
                    <a href="https://24001160-synrgy7-jus-fefin-ch8.vercel.app/">Link</a></p>
                <p>
                    This is a car rental application that requires users to register and log in to view available cars. Additionally, there is an admin panel accessible via the following link: <a href="https://24001160-synrgy7-jus-fefin-ch8.vercel.app/adminlogin">Admin Panel</a>. You can log in using the username superadmin1@example.com and password superadmin1. Within the admin panel, CRUD operations for cars can be performed.

                    Technologies used in this project include React with TypeScript, Vite, JWT for authentication, bcrypt for password hashing, and Node.js. Deployment is handled using Vercel for the frontend and Koyeb for the backend.
                </p>

                <p>Frontend (Github) :
                    <a href="https://github.com/justintnwj1/24001160-synrgy7-jus-fed-ch8">Link</a>
                </p>
                <p>Backend (Github) :
                    <a href="https://github.com/Justintnwj/24001160-synrgy7-jus-bed-ch8">Link</a>
                </p>
            </div>
            <div>
                <h2 className="myProjectHeader">Justin's Portofolio</h2>
                <div className="borderAbout">

                </div>
                <p>
                    This is Justin's Portfolio Website, which explains about Justin, the Projects he has done, and Contact information.
                </p>
                <p>Frontend (Github):
                    <a href="https://github.com/justintnwj1/24001160-synrgy7-jus-fed-ch8">Link</a>
                </p>
            </div>
            <div>
                <h2 className="myProjectHeader">Accesibility Banking</h2>
                <div className="borderAbout">

                </div>
                <p>Link Website Connect-BCA :
                    <a href="https://connect-bca.netlify.app/login">Link</a>
                </p>
                <p>
                    This is a banking application prototype designed with special accessibility features for visually impaired users. The app includes essential banking functions such as Login, Profile, Money Transfers, QRIS payments, Transaction History Checks, and Balance Inquiries. Additionally, the app is designed with color schemes that are visually friendly for users with visual impairments, ensuring an inclusive and user-centric experience.
                </p>
                <p>Frontend (Github):
                    <a href="https://github.com/SYNRGY7-Kelompok-6/connect-bca-frontend">Link</a>
                </p>

                <p>Backend (Github):
                    <a href="https://github.com/SYNRGY7-Kelompok-6/connect-bca-backend-js">Link</a>
                    <div style={{ color: 'white'}}>Backend (Github):<a href="https://github.com/SYNRGY7-Kelompok-6/BE-Java">Link</a></div>
                </p>
            </div>
            <div>
                <h2 className="myProjectHeader">Visualize</h2>
                <div className="borderAbout">

                </div>
                <p>Link Website Visualize Chocolate Milk :
                    <a href="https://visualize-id.vercel.app/1/dummy/chocolate-milk">Link</a>
                </p>
                <p>Link Website Visualize Candy :
                    <a href="https://visualize-id-2.vercel.app/1/dummy/candy">Link</a>
                </p>
                <p>
                    This app allows you to share a story or express your feelings visually. It features interactive games designed to help you better communicate and express your emotions to your partner, making it easier to connect and share what’s on your mind.
                </p>
            </div>
        </div>
    );

}