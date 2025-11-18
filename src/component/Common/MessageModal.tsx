import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title?: string;
}

export default function Modal({ isOpen, onClose, message, title }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop – deep blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-40"
          />

          {/* Modal Card */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 50 }}
              transition={{
                type: "spring",
                damping: 32,
                stiffness: 400,
              }}
              className="relative w-full max-w-lg pointer-events-auto"
              style={{
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.15), 0 40px 100px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              {/* Floating background orbs – pure eye candy */}
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/20 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/40 overflow-hidden">
                {/* Content */}
                <div className="p-8 pt-10">
                  {/* Floating Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Title – gradient text */}
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {title || "Notification"}
                  </h2>

                  {/* Message */}
                  <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                    {message}
                  </p>

                  {/* Action Button – glossy black with shine */}
                  <div className="mt-10 flex justify-end">
                    <button
                      onClick={onClose}
                      className="relative px-8 py-4 font-semibold text-white rounded-2xl overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                      }}
                    >
                      <span className="relative z-10">Got it</span>
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}