
// 'use client';

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// interface FormErrors {
//   name?: string;
//   email?: string;
//   subject?: string;
//   message?: string;
// }

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   // Validation functions
//   const validateName = (name: string): string | undefined => {
//     if (!name.trim()) {
//       return 'Name is required';
//     }
//     if (name.trim().length < 2) {
//       return 'Name must be at least 2 characters';
//     }
//     if (name.trim().length > 50) {
//       return 'Name must be less than 50 characters';
//     }
//     if (!/^[a-zA-Z\s]+$/.test(name)) {
//       return 'Name can only contain letters and spaces';
//     }
//     return undefined;
//   };

//   const validateEmail = (email: string): string | undefined => {
//     if (!email.trim()) {
//       return 'Email is required';
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return 'Please enter a valid email address';
//     }
//     if (email.length > 100) {
//       return 'Email must be less than 100 characters';
//     }
//     return undefined;
//   };

//   const validateSubject = (subject: string): string | undefined => {
//     if (!subject.trim()) {
//       return 'Subject is required';
//     }
//     if (subject.trim().length < 5) {
//       return 'Subject must be at least 5 characters';
//     }
//     if (subject.trim().length > 100) {
//       return 'Subject must be less than 100 characters';
//     }
//     return undefined;
//   };

//   const validateMessage = (message: string): string | undefined => {
//     if (!message.trim()) {
//       return 'Message is required';
//     }
//     if (message.trim().length < 10) {
//       return 'Message must be at least 10 characters';
//     }
//     if (message.trim().length > 1000) {
//       return 'Message must be less than 1000 characters';
//     }
//     return undefined;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
    
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     // Clear error for this field when user starts typing
//     if (errors[name as keyof FormErrors]) {
//       setErrors({
//         ...errors,
//         [name]: undefined
//       });
//     }
//   };

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     let error: string | undefined;

//     // Validate on blur
//     switch (name) {
//       case 'name':
//         error = validateName(value);
//         break;
//       case 'email':
//         error = validateEmail(value);
//         break;
//       case 'subject':
//         error = validateSubject(value);
//         break;
//       case 'message':
//         error = validateMessage(value);
//         break;
//     }

//     if (error) {
//       setErrors({
//         ...errors,
//         [name]: error
//       });
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {
//       name: validateName(formData.name),
//       email: validateEmail(formData.email),
//       subject: validateSubject(formData.subject),
//       message: validateMessage(formData.message)
//     };

//     setErrors(newErrors);

//     // Return true if no errors
//     return !Object.values(newErrors).some(error => error !== undefined);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitStatus('idle');

//     // Validate all fields before submitting
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: 'caadbfe9-f507-4cfd-a298-e34f9ade33ac',
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           subject: formData.subject.trim(),
//           message: formData.message.trim(),
//           from_name: 'Portfolio Contact Form',
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitStatus('success');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//         setErrors({});
//         setTimeout(() => setSubmitStatus('idle'), 5000);
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach out!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Contact Information
//             </h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
//                   <p className="text-gray-600">sufiyanmtamboli2005@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Phone className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
//                   <p className="text-gray-600">+91 9766942840</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <MapPin className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
//                   <p className="text-gray-600">Pandharpur, India</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
//               <div className="flex gap-4">
//                 <a href="https://github.com/SUFIYAN-hub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
//                   GH
//                 </a>
//                 <a href="https://www.linkedin.com/in/sufiyan-tamboli-4064a7368/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
//                   LI
//                 </a>
//                 <a href="https://x.com/SufiyanT23" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
//                   TW
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div>
//             <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//               {submitStatus === 'success' && (
//                 <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
//                   <CheckCircle size={20} />
//                   <span>Message sent successfully! I will get back to you soon.</span>
//                 </div>
//               )}

//               {submitStatus === 'error' && (
//                 <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
//                   <AlertCircle size={20} />
//                   <span>Something went wrong. Please try again or email me directly.</span>
//                 </div>
//               )}

//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
//                   Name <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name" 
//                   value={formData.name} 
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all`}
//                   placeholder="John Doe" 
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
//                     <AlertCircle size={14} />
//                     {errors.name}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email" 
//                   value={formData.email} 
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all`}
//                   placeholder="john@example.com" 
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
//                     <AlertCircle size={14} />
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
//                   Subject <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="text" 
//                   id="subject" 
//                   name="subject" 
//                   value={formData.subject} 
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all`}
//                   placeholder="Project Inquiry" 
//                 />
//                 {errors.subject && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
//                     <AlertCircle size={14} />
//                     {errors.subject}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea 
//                   id="message" 
//                   name="message" 
//                   value={formData.message} 
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   rows={5} 
//                   className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none`}
//                   placeholder="Tell me about your project..."
//                   maxLength={1000}
//                 ></textarea>
//                 <div className="flex justify-between items-start mt-1">
//                   {errors.message ? (
//                     <p className="text-sm text-red-600 flex items-center gap-1">
//                       <AlertCircle size={14} />
//                       {errors.message}
//                     </p>
//                   ) : (
//                     <span className="text-sm text-gray-500">
//                       {formData.message.length}/1000 characters
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//                 <Send size={20} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (name.trim().length > 50) {
      return 'Name must be less than 50 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name can only contain letters and spaces';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (email.length > 100) {
      return 'Email must be less than 100 characters';
    }
    return undefined;
  };

  const validateSubject = (subject: string): string | undefined => {
    if (!subject.trim()) {
      return 'Subject is required';
    }
    if (subject.trim().length < 5) {
      return 'Subject must be at least 5 characters';
    }
    if (subject.trim().length > 100) {
      return 'Subject must be less than 100 characters';
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    if (message.trim().length > 1000) {
      return 'Message must be less than 1000 characters';
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let error: string | undefined;

    // Validate on blur
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'subject':
        error = validateSubject(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
    }

    if (error) {
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message)
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    // Validate all fields before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'caadbfe9-f507-4cfd-a298-e34f9ade33ac',
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">sufiyanmtamboli2005@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">+91 9766942840</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Pandharpur, India</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://github.com/SUFIYAN-hub" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 text-white text-xs sm:text-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  GH
                </a>
                <a href="https://www.linkedin.com/in/sufiyan-tamboli-4064a7368/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 text-white text-xs sm:text-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  LI
                </a>
                <a href="https://x.com/SufiyanT23" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 text-white text-xs sm:text-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  TW
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Message sent successfully! I will get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-start gap-2 text-xs sm:text-sm">
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all`}
                  placeholder="John Doe" 
                />
                {errors.name && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} className="flex-shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all`}
                  placeholder="john@example.com" 
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} className="flex-shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all`}
                  placeholder="Project Inquiry" 
                />
                {errors.subject && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} className="flex-shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4} 
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none`}
                  placeholder="Tell me about your project..."
                  maxLength={1000}
                ></textarea>
                <div className="flex justify-between items-start mt-1">
                  {errors.message ? (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} className="flex-shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  ) : (
                    <span className="text-xs sm:text-sm text-gray-500">
                      {formData.message.length}/1000 characters
                    </span>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}