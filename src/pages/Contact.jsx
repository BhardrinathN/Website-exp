import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Home,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-react';
import { fallbackLocations } from '../lib/fallbackData';

const productCategories = [
  'Wood Products',
  'Paper Products',
  'Polymer Products',
  'Metal Products',
  'Foam Products',
  'Specialty',
];

const inputStyles =
  'w-full border border-slate-300 rounded-btn px-4 py-3 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200 text-slate-800 bg-white placeholder:text-slate-400';

const labelStyles = 'block text-sm font-medium text-slate-700 mb-1.5';

const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-card shadow-xl max-w-md ${
        type === 'success'
          ? 'bg-green-600 text-white'
          : 'bg-red-600 text-white'
      }`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setToast({
        type: 'success',
        message: 'Quote request sent successfully! We\'ll get back to you within 24 hours.',
      });
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setToast({
        type: 'error',
        message: 'Failed to send your request. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Divine Packaging Industry | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Divine Packaging Industry for a custom packaging quote. Our offices in Chennai and Gujarat are ready to serve your industrial packaging needs."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="gradient-primary py-20 md:py-24">
        <div className="container-custom">
          <motion.nav
            className="flex items-center gap-2 text-white/70 text-sm mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact Us</span>
          </motion.nav>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Request a quote or reach out to our team — we're ready to design the
            perfect packaging solution for your needs.
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Request a Quote
              </h2>
              <div className="h-1 w-16 rounded-full bg-accent mb-8" />

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                {/* Row: Company + Contact Person */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className={labelStyles}>
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      className={inputStyles}
                      placeholder="Your company name"
                      {...register('company', {
                        required: 'Company name is required',
                      })}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className={labelStyles}>
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactPerson"
                      type="text"
                      className={inputStyles}
                      placeholder="Full name"
                      {...register('contactPerson', {
                        required: 'Contact person is required',
                      })}
                    />
                    {errors.contactPerson && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.contactPerson.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row: Phone + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={labelStyles}>
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputStyles}
                      placeholder="+91 98765 43210"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[+]?[\d\s()-]{7,15}$/,
                          message: 'Please enter a valid phone number',
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelStyles}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputStyles}
                      placeholder="you@company.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className={labelStyles}>
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    className={inputStyles}
                    placeholder="Your city"
                    {...register('city', {
                      required: 'City is required',
                    })}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Products Interested In */}
                <div>
                  <label className={labelStyles}>Products Interested In</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                    {productCategories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-slate-900"
                      >
                        <input
                          type="checkbox"
                          value={category}
                          className="w-4 h-4 rounded border-slate-300 text-accent focus:ring-accent"
                          {...register('products')}
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className={labelStyles}>
                    Quantity Required
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    className={inputStyles}
                    placeholder="e.g. 500 units / month"
                    {...register('quantity')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelStyles}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`${inputStyles} resize-none`}
                    placeholder="Tell us about your packaging requirements..."
                    {...register('message')}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-btn transition-colors duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Quote Request
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right — Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Contact Info
              </h2>
              <div className="h-1 w-16 rounded-full bg-accent mb-8" />

              {/* Contact Details */}
              <div className="space-y-5 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Phone</p>
                    <a
                      href="tel:+919840343704"
                      className="text-slate-800 font-semibold hover:text-accent transition-colors"
                    >
                      +91 98403 43704
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <a
                      href="mailto:info@divinepackaging.in"
                      className="text-slate-800 font-semibold hover:text-accent transition-colors"
                    >
                      info@divinepackaging.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Business Hours
                    </p>
                    <p className="text-slate-800 font-semibold">
                      Mon – Sat: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Our Locations
              </h2>
              <div className="h-1 w-16 rounded-full bg-accent mb-8" />

              <div className="space-y-6">
                {fallbackLocations.map((location) => (
                  <div
                    key={location._id}
                    className="card-hover p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {location.name}
                        </h3>
                        <p className="text-slate-600 text-sm mt-1 mb-4">
                          {location.address}
                        </p>
                        {location.mapEmbedUrl && (
                          <div className="rounded-lg overflow-hidden shadow-sm border border-slate-200 mt-3">
                            <iframe
                              src={location.mapEmbedUrl}
                              width="100%"
                              height="150"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`${location.name} Map`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Maps are now rendered with each location above */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
