import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, MapPin} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-spacing bg-gray-50 dark:bg-gray-900/50">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better, my background, and what drives my passion for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              A <span className="text-primary-600 dark:text-primary-400">Creative Developer</span>{' '}
              Based in India
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I work best in collaborative environments that encourage creativity and real-world problem-solving. With a keen interest in cloud computing 
              and web development, I'm always experimenting with new technologies to apply practical solutions. I can work well under pressure and 
              contribute to significant results because of my flexibility and analytical mindset. I'm dedicated to lifelong learning and creating 
              value via teamwork and creativity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-primary-600 dark:text-primary-400 mr-3" />
                <a
                  href="mailto:mail@pranneethdk.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  mail@pranneethdk.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary-600 dark:text-primary-400 mr-3" />
                <span>Namakkal, Tamil Nadu, India</span>
              </div>
            </div>
            <a href="https://drive.google.com/file/d/1QXmRlYeGQd1sfft4r61aNTAlTmewqknf/view?usp=drive_link" target='_blank' className="btn-primary inline-flex items-center">
              <Download className="mr-2" size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;