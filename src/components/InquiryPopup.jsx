import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, UploadCloud } from 'lucide-react';

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  
  // Captcha state
  const [captchaParams, setCaptchaParams] = useState({ num1: 0, num2: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasBeenShown = sessionStorage.getItem('inquiryPopupShown');
    
    if (!hasBeenShown) {
      // Show the popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        generateCaptcha();
        sessionStorage.setItem('inquiryPopupShown', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
        generateCaptcha();
    }
  }, []);

  const generateCaptcha = () => {
    setCaptchaParams({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate Captcha
    if (parseInt(captchaInput) !== (captchaParams.num1 + captchaParams.num2)) {
        setCaptchaError(true);
        return;
    }
    
    // Form submission logic would go here
    setIsSubmitted(true);
    
    // Close the popup after a short delay showing the success message
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  const handleFileChange = (e) => {
      if(e.target.files && e.target.files.length > 0) {
          setFileName(e.target.files[0].name);
      } else {
          setFileName('');
      }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/20 hover:bg-black/40 rounded-full p-1"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white text-center sticky top-0 z-[5]">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Quick Inquiry
              </h3>
              <p className="text-blue-100 text-sm">
                We welcome any question or requirement you may have for our products
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-500">Your inquiry has been received. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-1">Name of Company :<span className="text-red-500">*</span></label>
                        <input type="text" id="companyName" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-1">Name of Contact Person :<span className="text-red-500">*</span></label>
                        <input type="text" id="contactPerson" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Tel. No. / Cell No. :<span className="text-red-500">*</span></label>
                        <input type="tel" id="phone" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email :<span className="text-red-500">*</span></label>
                        <input type="email" id="email" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-1">Select a country</label>
                        <select id="country" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Address / City / Location :<span className="text-red-500">*</span></label>
                        <input type="text" id="location" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                      </div>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-semibold text-gray-700 mb-1">Requirements Details :<span className="text-red-500">*</span></label>
                    <textarea id="requirements" rows="3" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                  </div>

                  <div>
                      <span className="block text-sm font-semibold text-gray-700 mb-2">Attachment</span>
                      <div className="flex items-center gap-3">
                          <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
                              <UploadCloud size={16} />
                              Choose File
                              <input type="file" className="hidden" onChange={handleFileChange} />
                          </label>
                          <span className="text-sm text-gray-500 italic">
                              {fileName ? fileName : 'No file chosen'}
                          </span>
                      </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Please, Enter Below Verification Numbers here:</label>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-mono font-bold text-lg text-blue-800 shadow-inner select-none flex items-center justify-center tracking-widest min-w-[100px]">
                              {captchaParams.num1} + {captchaParams.num2} = ?
                          </div>
                          <div className="flex-1">
                              <input 
                                type="text" 
                                required 
                                value={captchaInput}
                                onChange={(e) => {
                                    setCaptchaInput(e.target.value);
                                    setCaptchaError(false);
                                }}
                                placeholder="Captcha code" 
                                className={`w-full px-4 py-2 bg-white border ${captchaError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} rounded-lg focus:ring-2 outline-none transition-all`} 
                              />
                              {captchaError && <p className="text-red-500 text-xs mt-1 font-medium">Incorrect captcha code. Please try again.</p>}
                          </div>
                      </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-blue-500/30"
                  >
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
