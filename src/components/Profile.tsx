import { useState, useEffect } from 'react';
import picture from '../assets/New Year End.jpeg';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    const jobTitles = ['Web Developer', 'Consultant', 'Backend Developer'];
    const [index, setIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(jobTitles[index]);
    const links = [
        {
            icon: faLinkedin,
            url: "https://id.linkedin.com/in/justin-tanuwijaya-18a987154"
        },
        {
            icon: faInstagram,
            url: "https://www.google.com/"
        },
        {
            icon: faGithub,
            url: "https://fontawesome.com/search?q=github&o=r"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % jobTitles.length;
                setCurrentTitle(jobTitles[nextIndex]);
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval); // Hentikan interval ketika komponen dibersihkan
    }, []);
    return (
        <div className="profile">
            <div className='profileContainer'>
                <div className='picture'>
                    <img src={picture} alt='profilePicture' />
                </div>
                <div className='profileDescContainer'>
                    <div className='name'>
                        Justin Tanuwijaya
                    </div>
                    <div className='jobTitle'>
                        {currentTitle}
                    </div>
                    <div className='socialMedia'>
                        {links.map((link, index) => (
                            <div className="iconSocMed" key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={link.icon} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
