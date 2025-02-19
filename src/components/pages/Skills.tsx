import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss, faJs, faPython, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, Tooltip, Legend
);

const Skills = () => {
    const skills = [
        { icon: faHtml5, value: 94, percent: '94' },
        { icon: faCss, value: 88, percent: '88' },
        { icon: faJs, value: 90, percent: '90' },
        { icon: faPython, value: 82, percent: '82' },
        { icon: faNode, value: 86, percent: '86' },
        { icon: faReact, value: 95, percent: '95' },
        { icon: faDatabase, value: 80, percent: '80' },
    ];

    const createDonutData = (value: number) => ({
        labels: [],
        datasets: [{
            label: '',
            data: [100 - value, value],
            backgroundColor: ['#ffffff', '#000f3f']
        }]
    });

    const textCenter = (value: string) => ({
        id: 'textCenter',
        beforeDatasetsDraw(chart: any) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = '2rem Pacifico';
            ctx.fillStyle = '#000f3f';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${value}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    });

    return (
        <div className='skills'>
            {skills.map((link, index) => (
                <div className='skillsParent'
                    key={index}>
                    <div style={{ width: '160px', height: '160px', margin: '0px', padding: '0px' }}>
                        <Doughnut
                            data={createDonutData(link.value)}
                            plugins={[textCenter(link.percent)]}>
                        </Doughnut>
                    </div>
                    <div className='iconLogo'>
                        <FontAwesomeIcon icon={link.icon} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;