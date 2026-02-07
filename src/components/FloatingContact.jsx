
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, X, MessageSquareText } from 'lucide-react';
import { user } from '../data/user';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Variantes para la animación de los botones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

            {/* Botones desplegables */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col gap-3 items-center"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={containerVariants}
                    >
                        {/* WhatsApp */}
                        <motion.a
                            href={user.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors relative group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MessageCircle size={24} />
                            <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                WhatsApp
                            </span>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href={user.social.email}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full shadow-lg text-white hover:bg-red-600 transition-colors relative group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={22} />
                            <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Gmail
                            </span>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Botón Principal */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 ${isOpen ? 'bg-gray-700 rotate-45' : 'bg-blue-600 hover:bg-blue-700 rotate-0'
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} /> : <MessageSquareText size={24} />}
            </motion.button>

        </div>
    );
};

export default FloatingContact;
