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
    <div id="education" className=" mb-20 ">
        <h2 className="relative text-center mb-20">
 <h2 className="text-center font-serif italic text-4xl md:text-5xl text-white mb-16">
  <span className="relative">
    My Education
    {/* <span className="absolute bottom-0 left-0 right-0 h-px bg-white/50"></span> */}
  </span>
</h2>
  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></span>
  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-50"></span>
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
