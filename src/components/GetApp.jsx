import React from 'react'
import { motion } from 'framer-motion'
import apkUrl from '../assets/application-3922bfc7-1f2f-47f6-ba65-76613f7d7a50.apk'

const GetApp = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Check Your Skin Health?
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Download SkinSight today and get instant AI-powered analysis combined with real-time environmental context.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Android Download Button */}
            <motion.a
              href={apkUrl}
              download="SkinSight.apk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-50 transition-colors w-full sm:w-auto min-w-[200px] justify-center"
            >
              <img 
                src="/images/android-removebg-preview.png" 
                alt="Android" 
                className="w-10 h-10 mr-3 object-contain"
              />
              <div className="text-left">
                <div className="text-xs uppercase font-semibold text-primary-800">Download for</div>
                <div className="text-xl leading-none">Android</div>
              </div>
            </motion.a>

            {/* iOS Coming Soon Button */}
            <div className="relative group">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-primary-700 text-xs font-bold px-2 py-0.5 rounded shadow-sm z-20">
                Coming Soon
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-bold text-lg cursor-not-allowed opacity-80 w-full sm:w-auto min-w-[200px] justify-center"
                disabled
              >
                <svg className="w-8 h-8 mr-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.04.05-2.29.69-3.02 1.55-.65.75-1.21 1.95-1.06 3.04 1.15.09 2.33-.64 3.01-1.48" />
                </svg>
                <div className="text-left">
                  <div className="text-xs uppercase font-semibold text-white/70">Soon on</div>
                  <div className="text-xl leading-none">iOS Store</div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetApp
