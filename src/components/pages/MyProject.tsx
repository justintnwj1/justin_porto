import './pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MyProject = () => {
    const project = [
        {
            title: 'Binar Car Rental',
            desc: 'This is a car rental application that requires users to register and log in to view available cars.',
            tech: 'JWT,Bycrypt,Vercel,Koyeb,React,Vite,NodeJS,PostgresQL',
            web: 'https://24001160-synrgy7-jus-fefin-ch8.vercel.app/',
            frontend: 'https://github.com/justintnwj1/24001160-synrgy7-jus-fed-ch8',
            backend: 'https://github.com/Justintnwj/24001160-synrgy7-jus-bed-ch8'
        },
        {
            title: 'Portofolio',
            desc: 'This is Justin is Portfolio Website, which explains about Justin, the Projects he has done, and Contact information.',
            tech: 'Vercel,Koyeb,React,Vite',
            web: '-',
            frontend: 'https://github.com/justintnwj1/24001160-synrgy7-jus-fed-ch8',
            backend: '-'
        },
        {
            title: 'Accesibility Banking',
            desc: 'This is a banking application prototype designed with special accessibility features for visually impaired users.',
            tech: 'JWT,Bycrypt,Netlify,Heroku,React,NodeJS,PostgresQL,Tailwind',
            web: 'https://connect-bca.netlify.app/login',
            frontend: 'https://github.com/SYNRGY7-Kelompok-6/connect-bca-frontend',
            backend: 'https://github.com/SYNRGY7-Kelompok-6/connect-bca-backend-js'
        },
        {
            title: 'Visualize Chocolate Milk',
            desc: 'This app allows you to share a story or express your feelings visually.',
            tech: 'JWT,Bycrypt,Vercel,Koyeb,React,Vite,NodeJS,PostgresQL',
            web: 'https://visualize-id.vercel.app/1/dummy/chocolate-milk',
            frontend: '-',
            backend: '-'
        },
        {
            title: 'Visualize Candy',
            desc: 'This app allows you to share a story or express your feelings visually.',
            tech: 'JWT,Bycrypt,Vercel,Koyeb,React,NodeJS,PostgresQL',
            web: 'https://visualize-id-2.vercel.app/1/dummy/candy',
            frontend: '-',
            backend: '-'
        }
    ];

    // State untuk halaman yang aktif
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    // Fungsi untuk berpindah ke proyek berikutnya
    const goToNextProject = () => {
        if (currentProjectIndex < project.length - 1) {
            setCurrentProjectIndex(currentProjectIndex + 1);
        }
    };

    // Fungsi untuk berpindah ke proyek sebelumnya
    const goToPreviousProject = () => {
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex(currentProjectIndex - 1);
        }
    };

    const proj = project[currentProjectIndex];

    return (
        <div className="myProject">
            <div className='contentProject'>
                <div className='titleProParent'>
                    <div className='titleProject'>
                        <div className='borderTitleProject'>
                            {proj.title}
                        </div>
                    </div>
                </div>
                <div className='descProjectParent'>
                    <div className='descriptionProject'>
                        {proj.desc}
                    </div>
                    <div className='techProject'>
                        {proj.tech}
                    </div>
                    <div className='githubProject'>
                        {proj.web && (
                            <div className='linkProject'>
                                <div className='titleLinkPro'>
                                    <FontAwesomeIcon icon={faLink} />
                                </div>
                                <div className='nameLinkPro'>
                                    Website
                                </div>
                                <div>
                                    : <a href={proj.web} target="_blank" rel="noopener noreferrer">Website</a>
                                </div>
                            </div>
                        )}
                        {proj.frontend && (
                            <div className='gitProjectFrontend'>
                                <div className='titleLinkPro'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                                <div className='nameLinkPro'>
                                    Frontend
                                </div>
                                <div>
                                    : {proj.frontend !== '-' ? <a href={proj.frontend} target="_blank" rel="noopener noreferrer">Github</a> : '-'}
                                </div>
                            </div>
                        )}
                        {proj.backend && (
                            <div className='gitProjectBackend'>
                                <div className='titleLinkPro'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                                <div className='nameLinkPro'>
                                    Backend
                                </div>
                                <div>
                                    : {proj.backend !== '-' ? <a href={proj.backend} target="_blank" rel="noopener noreferrer">Github</a> : '-'}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='pagination'>
                <div className='pageLeft' onClick={goToPreviousProject}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </div>
                <div className='pageRight' onClick={goToNextProject}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </div>
            </div>
        </div>
    );
};

export default MyProject;
