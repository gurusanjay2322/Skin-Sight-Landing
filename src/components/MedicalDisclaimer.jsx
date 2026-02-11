import React from 'react'
import { motion } from 'framer-motion'

const MedicalDisclaimer = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-lg max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Medical Disclaimer</h3>
              <p className="text-yellow-700 leading-relaxed mb-4">
                SkinSight is designed as a <strong>triage aid</strong> and is not a substitute for professional 
                medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider 
                with any questions you may have regarding a medical condition.
              </p>
              <p className="text-yellow-700 leading-relaxed">
                The system requires larger clinical datasets and dermatologist validation before medical use. 
                Next steps include fine-tuning on curated datasets, personalization, on-device optimization, 
                and formal clinical evaluation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MedicalDisclaimer
