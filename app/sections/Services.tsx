"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiShoppingCart, FiLayout } from "react-icons/fi";

const Services = () => {
    const services = [
        {
            icon: <FiCode size={28} />,
            title: "Full-Stack Development",
            description: "End-to-end web solutions using Next.js, Node.js, and Laravel. Building scalable, high-performance applications tailored to your business needs.",
            tags: ["Next.js", "Laravel", "Node.js", "TypeScript"],
        },
        {
            icon: <FiLayout size={28} />,
            title: "Frontend Development",
            description: "Crafting fluid, intuitive, and responsive user interfaces. Focused on modern design systems, interaction design, and premium aesthetics.",
            tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            icon: <FiServer size={28} />,
            title: "Backend Development",
            description: "Robust server-side solutions with RESTful APIs, database design, and secure authentication systems. Ensuring reliability and scalability.",
            tags: ["Laravel", "PHP", "MySQL", "REST APIs"],
        },
        {
            icon: <FiShoppingCart size={28} />,
            title: "E-Commerce Solutions",
            description: "Fully functional online store platforms with shopping carts, secure payment gateways, and real-time inventory management dashboards.",
            tags: ["Payment Integration", "Shopping Cart", "Admin Panels"],
        },
    ];

    return (
        <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto container-padding relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Our Expertise</span>
                    <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Comprehensive Digital Solutions</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
                        At <a href="https://modexa-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-blue-400 decoration-2 underline-offset-2">Modexa</a>, we provide tailored services to transform your ideas into powerful digital experiences
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Ready to start your next project?
                    </p>
                    <a
                        href="https://modexa-two.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        Let's Work Together
                        <svg
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
