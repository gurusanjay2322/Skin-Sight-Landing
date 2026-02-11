import React from 'react'
import { motion } from 'framer-motion'

const Privacy = () => {
  const privacyFeatures = [
    {
      title: 'Explicit Consent',
      description: 'Every image processing requires your explicit consent. No data is processed without your permission.',
    },
    {
      title: 'Configurable Retention',
      description: 'Choose whether to save your assessment history. Default setting: no permanent storage.',
    },
    {
      title: 'Secure Processing',
      description: 'All images are processed securely with industry-standard encryption and security measures.',
    },
    {
      title: 'Low-Confidence Warnings',
      description: 'System includes warnings when predictions have low confidence, ensuring transparency.',
    },
  ]

  return (
    <section id="privacy" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy & <span className="text-gradient">Safety</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy and safety are our top priorities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Privacy

