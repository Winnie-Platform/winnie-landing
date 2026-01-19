'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Apple, Play, Smartphone, QrCode, Sparkles, Download as DownloadIcon } from 'lucide-react';

export default function Download() {
  const t = useTranslations('download');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="download"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-700)] to-[var(--color-brand-900)]" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--color-brand-400)] rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--color-brand-500)] rounded-full blur-3xl opacity-25"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-[var(--color-brand-300)] rounded-full blur-3xl opacity-20"
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20"
            >
              <Sparkles className="h-4 w-4 text-[var(--color-brand-200)]" />
              <span className="text-sm font-medium text-white/90">
                Free Download
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight"
            >
              {t('title')}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              {t('subtitle')}
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/app/winnie"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/20 active:scale-[0.98]"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">
                    Download on the
                  </div>
                  <div className="text-base font-semibold -mt-0.5">
                    {t('appStore')}
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.mywinnie"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 text-white transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10 active:scale-[0.98]"
              >
                <Play className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/70">
                    Get it on
                  </div>
                  <div className="text-base font-semibold -mt-0.5">
                    {t('playStore')}
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Stats or Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 sm:gap-10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/60">Downloads</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-sm text-white/60">App Rating</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/60">Free</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - QR Code Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-brand-400)] to-[var(--color-brand-300)] rounded-3xl blur-2xl opacity-30" />

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Quick Download
                    </h3>
                    <p className="text-sm text-white/60">Scan to install</p>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="relative bg-white rounded-2xl p-4 sm:p-6">
                  {/* QR Code Pattern Placeholder */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-600)] flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">W</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-700">
                        QR Code
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Scan with camera
                      </p>
                    </div>
                  </div>

                  {/* Corner Markers */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-[var(--color-brand-600)] rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-[var(--color-brand-600)] rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-[var(--color-brand-600)] rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-[var(--color-brand-600)] rounded-br-lg" />
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex items-center justify-center gap-2 text-white/70">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-sm">iOS & Android</span>
                </div>

                {/* Floating Download Icon */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                >
                  <DownloadIcon className="w-5 h-5 text-[var(--color-brand-600)]" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
