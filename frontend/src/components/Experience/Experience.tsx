import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: ReactNode;
  type: 'work' | 'education';
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'Executive Member',
      company: 'IEEE KPRIET SSIT SB',
      period: 'June 2024 - April 2025',
      description: (
      <>
        <p><b>Responsibilities:</b></p>
        <li>Assisted in organizing technical events, workshops, and hackathons for student engagement.</li>
        <li>Collaborated with peers to promote innovation and knowledge-sharing in engineering and technology.</li>
        <li>Contributed to IEEE initiatives aimed at professional development and community building.</li>
      </>
      ),
      type: 'work',
    },
    {
      id: 2,
      title: 'Internship',
      company: 'Codsoft, West Bengal',
      period: 'Jan 2024 - Feb 2024',
      description: 'Remote Internship on Data Science using python.',
      type: 'work',
    },
    {
      id: 3,
      title: 'Bachelor of Technology in Computer Science and Business Systems',
      company: 'KPR Institute of Engineering and Technology, Coimbatore',
      period: '2022 - Present',
      description:'CGPA: 7.1',
      type: 'education',
    },
    {
      id: 4,
      title: 'NARAYANA JUNIOR COLLEGE',
      company: 'VIJAYAWADA, ANDHRA PRADESH',
      period: '2022',
      description:'HSC: 64.7% [344/530]',
      type: 'education',
    },
    {
      id: 5,
      title: 'NARAYANA EM HS PEDARUPALLI',
      company: 'NELLORE, ANDHRA PRADESH',
      period: '2020',
      description:"SSLC: 98% [598/600]",
      type: 'education',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-spacing pb-0">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and
            expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-900 transform md:-translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 md:w-1/2">
                <div
                  className={`card p-6 relative ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  } z-10`}
                >
                  <div
                    className={`absolute top-6 ${
                      index % 2 === 0 ? 'left-0 md:-left-4' : 'right-0 md:-right-4'
                    } w-8 h-8 ${
                      item.type === 'work'
                        ? 'bg-primary-500'
                        : 'bg-secondary-500'
                    } rounded-full flex items-center justify-center text-white transform ${
                      index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'
                    }`}
                  >
                    {item.type === 'work' ? (
                      <Briefcase size={16} />
                    ) : (
                      <GraduationCap size={16} />
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 text-sm rounded-full mb-3 bg-gray-100 dark:bg-gray-700">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <h4 className="text-primary-600 dark:text-primary-400 mb-4">{item.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;