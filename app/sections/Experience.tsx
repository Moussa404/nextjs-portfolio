"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheck, FiExternalLink, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "CinemaFlix - Movie Streaming Platform",
      company: "Personal Project",
      location: "Remote",
      period: "2025 - Present",
      description: [
        "Developed a premium movie streaming platform with an extensive catalog featuring advanced search and filtering capabilities.",
        "Implemented user authentication system with secure sign-in/sign-up functionality and personalized user profiles.",
        "Built a favorites management system allowing users to save and organize their preferred movies.",
        "Integrated dynamic movie details pages with comprehensive information including ratings, cast, synopsis, and trailers.",
        "Designed a modern, cinematic UI/UX with smooth animations, transitions, and responsive layouts optimized for all devices.",
        "Deployed on Vercel with optimized performance, SEO best practices, and accessibility standards.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Authentication", "API Integration", "Responsive Design", "UI/UX Design", "Vercel Deployment"],
      url: "https://cinemaflix-two.vercel.app/",
    },
    {
      title: " Portfolio Websites",
      company: "Freelance",
      location: "Remote",
      period: "Present",
      description: [
        "Developed multiple personal and client portfolios showcasing responsive design and interactive UI/UX.",
        "Implemented clean, modular code using HTML, CSS, and JavaScript to ensure scalability and maintainability.",
        "Integrated contact forms and dynamic content to improve user engagement.",
        "Applied best practices for SEO, performance optimization, and accessibility."
      ],
      skills: [" HTML", "CSS", "JavaScript", "Frontend & Backend Development", "Payment Gateway Integration", "Inventory Management", "Responsive Design", "Performance Optimization"],
      url: null,
    },
    {
      title: "E-Commerce Projects",
      company: "freelance",
      location: "Remote",
      period: "Present",
      description: [
        "Built fully functional online stores with product catalogs, shopping carts, and secure checkout systems.",
        "Integrated payment gateways and order management features for a seamless user experience.",
        "Implemented backend functionality using JavaScript and basic server-side technologies for inventory management.",
        "Optimized site performance and responsiveness for desktop and mobile devices.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Frontend & Backend Development", "Payment Gateway Integration", "Inventory Management", "Responsive Design", "Performance Optimization"],
      url: null,
    },
    {
      title: "Social Media Projects",
      company: "freelance",
      location: "remote",
      period: "Present",
      description: [
        "Created social media platforms and dashboards for content sharing and user interaction.",
        "Integrated authentication systems, user profiles, and real-time activity feeds.",
        "Applied responsive design principles for accessibility across devices.",
        "Focused on UI/UX improvements to enhance engagement and retention.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Authentication Systems", "Real-time Updates", "Responsive Design", "Frontend Development"],
      url: null,
    },
    {
      title: "full stack Intern",
      company: "Youbee.ai",
      location: "Beirut, lebanon",
      period: "Summer 2024",
      description: [
        "Gained hands-on experience in full stack web development through real-world projects.",
        "Learned and applied Laravel for building backend APIs and managing database operations efficiently.",
        "Developed dynamic web applications integrating both frontend and backend functionalities.",
        "Collaborated with a team to implement best practices in coding standards, version control, and project management.",
        "Enhanced skills in problem-solving, debugging, and deploying web applications.",
      ],
      skills: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Frontend & Backend Development", "Version Control (Git)", "Web Application Deployment"],
      url: null,
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Professional Journey</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My professional journey in web development, content creation, and digital solutions.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 dark:from-blue-600 dark:via-blue-500 dark:to-blue-400 rounded-full"
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-32 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                } md:w-1/2 ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="hidden md:flex absolute top-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white items-center justify-center z-10 shadow-lg border-4 border-white dark:border-gray-800"
                style={{
                  left: index % 2 === 0 ? "auto" : "calc(0% - 28px)",
                  right: index % 2 === 0 ? "calc(0% - 28px)" : "auto",
                }}
              >
                <FiBriefcase size={24} />
              </motion.div>

              <div className="md:hidden w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-lg mb-6 mx-auto border-4 border-white dark:border-gray-800">
                <FiBriefcase size={24} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-800">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center mb-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                      {exp.company}
                    </span>
                    <span className="mx-3">•</span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <FiCalendar className="mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400 text-sm">
                    <FiMapPin className="mr-1" size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className={`space-y-3 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <div className={`mt-1.5 mr-2 flex-shrink-0 ${index % 2 === 0 ? "md:order-last md:ml-2 md:mr-0" : ""}`}>
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50">
                          <FiCheck className="text-blue-600 dark:text-blue-400" size={12} />
                        </span>
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link to work if available */}
                {exp.url && (
                  <div className={`mt-5 ${index % 2 === 0 ? "md:justify-end" : ""} flex items-center gap-2`}>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <span className="font-medium">View Live Project</span>
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>

              {/* Timeline connecting line for mobile */}
              {index < experiences.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 mx-auto my-4 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 