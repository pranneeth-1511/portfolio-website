import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills: Skill[] = [
    { name: 'TypeScript', level: 80, color: 'bg-primary-500' },
    { name: 'Tailwind CSS', level: 70, color: 'bg-secondary-600' },
    { name: 'React', level: 60, color: 'bg-accent-500' },
    { name: 'HTML & CSS', level: 30, color: 'bg-primary-500' },
    { name: 'JavaScript', level: 30, color: 'bg-secondary-500' },    
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 30, color: 'bg-primary-500' },
    { name: 'Supabase', level: 20, color: 'bg-secondary-500' },
  ];

  const programming_skills: Skill[] = [
    { name: 'Java (Beginner)', level: 80, color: 'bg-primary-500' },
    { name: 'Python', level: 60, color: 'bg-secondary-500' },
  ];

  const AWS_Deploy: Skill[] = [
    { name: 'Amazon EC2', level: 50, color: 'bg-primary-500' },
    { name: 'Amazon IAM', level: 90, color: 'bg-secondary-500' },
    { name: 'Amazon S3', level: 30, color: 'bg-accent-500' },
    { name: 'Amazon RDS', level: 70, color: 'bg-primary-500' },    
  ];

  const Additional_skills: Skill[] = [
    { name: 'Appsheet Platform', level:45 , color: 'bg-primary-500' },
    { name: 'Git & Github', level: 60, color: 'bg-secondary-500' },
    { name: 'CI/CD Pipelines', level: 30, color: 'bg-accent-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          custom={skill.level}
          variants={skillVariants}
          className={`h-full rounded-full ${skill.color}`}
        ></motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-spacing pb-0 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various
            technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="card p-6"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400">
              Frontend Development
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="card p-6"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-secondary-600 dark:text-secondary-400">
              Backend Development
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="card p-6 lg:col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-accent-600 dark:text-accent-400">
              Programing / Coding
            </h3>
            {programming_skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="card p-6 lg:col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-accent-600 dark:text-accent-400">
              AWS Services
            </h3>
            {AWS_Deploy.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="card p-6 lg:col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-accent-600 dark:text-accent-400">
              Additional Skills
            </h3>
            {Additional_skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React.js',
              'Java Programming',
              'Node.js',
              'Cloud Deployment',
              'Cloud Computing',
              'Networking',
              'Security',
              'Autodesk Fusion 360',
              'Git & Github',
              'AWS Services (EC2,S3,RDS,IAM)',
              'CI/CD Pipelines',
              'Unix/Linux Environment',
              'Appsheet (Low-code Platform)',
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-0 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;