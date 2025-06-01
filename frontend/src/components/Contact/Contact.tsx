import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import hackerrank from '../../Assets/icons/hackerrank.png';
import leetcode from '../../Assets/icons/leetcode.png';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const socialLinks = [
    { platform: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/pranneeth-1511' },
    { platform: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/pranneethdk' },
    { platform: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/pranneeth_1511/' },
    {
      platform: 'LeetCode',
      icon: <img src={leetcode} alt="LeetCode" className="w-5 h-5" />,
      url: 'https://leetcode.com/u/pranneethdk/',
    },
    {
      platform: 'HackerRank',
      icon: <img src={hackerrank} alt="HackerRank" className="w-8 h-5" />,
      url: 'https://www.hackerrank.com/pranneethdk',
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-gray-50 dark:bg-gray-900/50 min-h-screen flex items-center justify-center">
      <div className="container-padding mx-auto w-full max-w-4xl">
        {/* Top Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create
            something amazing together.
          </p>
        </motion.div>

        {/* Centered Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-1 justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="card p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-start justify-center text-left">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Namakkal, Tamil Nadu, India</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-start justify-center text-left">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:mail@pranneethdk.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    mail@pranneethdk.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map(({ platform, icon, url }) => (
                  <div key={platform} className="relative group">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                      aria-label={platform}
                    >
                      {icon}
                    </a>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-transparent text-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      <strong>{platform}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;