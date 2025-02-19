import './pages.css';
import bca from '../../assets/bca.png';
import acn from '../../assets/acn.png';
import trisakti from '../../assets/trisakti.png';

interface AboutPartProps {
    title: string;
    image: string;
    alt: string; 
    className: string;
    delay: string;
}

// Data untuk tiap bagian
const aboutData = [
    {
        title: "Working At Accenture",
        image: acn,
        alt: "acn-logo"
    },
    {
        title: "BCA Bootcamp Scholarship",
        image: bca,
        alt: "bca-logo"
    },
    {
        title: "Graduated from Trisakti University",
        image: trisakti,
        alt: "trisakti-logo"
    }
];

// Komponen AboutPart dengan tipe props
const AboutPart = ({ title, image, alt, className, delay  }: AboutPartProps) => (
    <div className={className} style={{ animationDelay: delay }}>
        <h2>{title}</h2>
        <img src={image} alt={alt} />
    </div>
);

const About = () => {
    return (
        <div className="About">
            {aboutData.map((item, index) => (
                <AboutPart 
                    key={index} 
                    title={item.title} 
                    image={item.image} 
                    alt={item.alt} 
                    className={`aboutPart${index + 1}`}
                    delay={`${index * 1}s`} // Delay setiap elemen 1 detik berturut-turut
                />
            ))}
        </div>
    );
};

export default About;
