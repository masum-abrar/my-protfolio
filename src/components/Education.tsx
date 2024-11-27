'use client';
import { BackgroundGradient } from './ui/background-gradient';

export const educationDetails = [
  {
    title: 'Secondary School Certificate (SSC)',
    institution: 'LBS City Corp. High School',
    year: '2017',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'KNC City Corp. College',
    year: '2019',
  },
  {
    title: 'BSc in Computer Science and Engineering',
    institution: 'Primier University of Chittagong',
    year: 'Present',
  },
];

export const Education = () => {
  return (
    <div id="education" className="py-44  ">
      <h2 className="text-center text-6xl font-bold mb-6 text-white mb-20 " id="eduction">
        My Education
      </h2>
      <div className="lg:flex  items-center justify-center gap-8   ">
        {educationDetails.map((education, index) => (
          <div
            key={index}
            className="w-full max-w-lg p-6 lg:flex flex-col rounded-lg shadow-lg transition duration-100 hover:scale-105"
          >
            {/* Applying BackgroundGradient inside each card */}
            <BackgroundGradient
            className='p-12 rounded-2xl  bg-gray-900 '
            >
              <h3 className="text-xl font-semibold text-white">{education.title}</h3>
              <p className="text-sm text-white">{education.institution}</p>
              <p className="text-sm text-white">{education.year}</p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};
