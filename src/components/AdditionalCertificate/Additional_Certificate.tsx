import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

import TECHFUSIONX_PDF from '../../Assets/PDF/Certificates/Event/Capabl Hackathon.pdf';
import RIP_NSS from '../../Assets/PDF/Certificates/Event/RIP_2K24 NSS.pdf';

import TECHFUSIONX_IMG from '../../Assets/Certificate-Logos-Badges/Capabl Hackathon.png';
import RIP_NSS_IMG from '../../Assets/Certificate-Logos-Badges/RIP_2K24 NSS.png';

interface AdditionalCertificate {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string | null;
  certLink?: string;
}

const AdditionalCertificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTag, setActiveTag] = useState<string>('ALL');

  const additionalCertificates: AdditionalCertificate[] = [
    {
      id: 1,
      title: 'HackXelerate-25 TechLead',
      description:
        'Selected as the Tech Lead for HackXelerate-25, tasked with managing technical operations, guiding participants, and ensuring the successful conduct of the hackathon.',
      tags: ['EVENT'],
    },
    {
      id: 2,
      title: 'TechfusionX Coordinator',
      description:
        'Received Certificate of Coordination by Capabl for the 2-day Coding Saksham Program 2024, handling logistics, team coordination, and coordinating industry-led sessions at KPR Institute of Engineering and Technology.',
      tags: ['EVENT'],
    },
    {
      id: 3,
      title: 'TechLead, CSBS Department Association (2024)',
      description:
        'Selected as the TechLead of the Computer Science and Business Systems (CSBS) Department Association, responsible for leading initiatives and coordinating events.',
      tags: ['ASSOCIATION'],
    },
    {
      id: 4,
      title: 'Rural Immersion Program - NSS',
      description:
        'Received Certificate for active participation in Rural Immersion Program 2024 at Kaduvettipalayam Village (Oct 18,2024 - Oct 29,2024). Made active contribution towards community outreach, cultural exchange, and rural development activities.',
      tags: ['NSS'],
      image: RIP_NSS_IMG,
      certLink: RIP_NSS,
    },
    {
      id: 5,
      title: 'Hackfest 2024 Coordinator',
      description:
        'Associated with SAP (2024) Successfully coordinated Hackfest 2024, ensuring smooth execution and team collaboration.',
      tags: ['EVENT'],
      image: TECHFUSIONX_IMG,
      certLink: TECHFUSIONX_PDF,
    },
  ];

  const allTags = ['ALL', ...new Set(additionalCertificates.flatMap(cert => cert.tags))];

  const filteredCertificates =
    activeTag === 'ALL'
      ? additionalCertificates
      : additionalCertificates.filter(cert => cert.tags.includes(activeTag));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="section-spacing">
      <div className="container-padding mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Additional Certifications / Volunteering Certification
          </h2>
        </motion.div>

        {/* Tag Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                activeTag === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertificates.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} className="card overflow-hidden">
              {cert.image && (
                <div className="relative w-full overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {cert.certLink && (
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <FiExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalCertificates;