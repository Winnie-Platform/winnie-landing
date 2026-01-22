'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Apple, Play, Sparkles } from 'lucide-react';

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
          className="text-center"
        >
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
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto"
          >
            {t('title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          {/* QR Code Cards */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {/* App Store QR Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Apple className="w-7 h-7 text-gray-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/60 uppercase tracking-wider">Download on the</p>
                    <p className="text-lg font-semibold text-white">{t('appStore')}</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="relative bg-white rounded-2xl p-4">
                  <div className="w-40 h-40 mx-auto relative">
                    <Image
                      src="/images/appstore-qr.svg"
                      alt="App Store QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Corner Markers */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-l-3 border-t-3 border-gray-900 rounded-tl-md" style={{ borderWidth: '3px' }} />
                  <div className="absolute top-3 right-3 w-5 h-5 border-r-3 border-t-3 border-gray-900 rounded-tr-md" style={{ borderWidth: '3px' }} />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-l-3 border-b-3 border-gray-900 rounded-bl-md" style={{ borderWidth: '3px' }} />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-r-3 border-b-3 border-gray-900 rounded-br-md" style={{ borderWidth: '3px' }} />
                </div>

                {/* Download Link */}
                <a
                  href="https://apps.apple.com/app/winnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center w-full gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-3 text-sm font-medium text-white transition-colors"
                >
                  <span>{t('iosDownload')}</span>
                </a>
              </div>
            </motion.div>

            {/* Google Play QR Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Play className="w-7 h-7 text-green-600 fill-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/60 uppercase tracking-wider">Get it on</p>
                    <p className="text-lg font-semibold text-white">{t('playStore')}</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="relative bg-white rounded-2xl p-4">
                  <div className="w-40 h-40 mx-auto relative">
                    <Image
                      src="/images/playstore-qr.svg"
                      alt="Google Play QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Corner Markers */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-l-3 border-t-3 border-green-600 rounded-tl-md" style={{ borderWidth: '3px' }} />
                  <div className="absolute top-3 right-3 w-5 h-5 border-r-3 border-t-3 border-green-600 rounded-tr-md" style={{ borderWidth: '3px' }} />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-l-3 border-b-3 border-green-600 rounded-bl-md" style={{ borderWidth: '3px' }} />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-r-3 border-b-3 border-green-600 rounded-br-md" style={{ borderWidth: '3px' }} />
                </div>

                {/* Download Link */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.mywinnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center w-full gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-3 text-sm font-medium text-white transition-colors"
                >
                  <span>{t('androidDownload')}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
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
        </motion.div>
      </div>
    </section>
  );
}
