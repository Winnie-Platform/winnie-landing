'use client';

import { useState } from 'react';
import { Copy, Check, Printer } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const shareLinks = [
    {
      name: 'Zalo',
      href: `https://zalo.me/share/url?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.344c-.156.26-.452.39-.782.39H7.61c-.486 0-.88-.394-.88-.88v-5.66c0-.33.13-.626.39-.782 2.29-1.43 4.58-2.86 6.87-4.29.26-.156.556-.156.782 0 .26.156.39.452.39.782v3.396h3.854c.33 0 .626.13.782.39.156.26.156.556 0 .782l-2.98 4.98c-.052.086-.104.156-.156.226-.052.07-.104.13-.156.182-.052.052-.104.104-.182.156-.07.052-.156.104-.26.156-.104.052-.208.078-.312.104-.104.026-.208.052-.312.052H9.348v2.34h8.424c.104.026.208.078.312.156.104.078.182.182.26.312.052.104.078.234.052.364-.026.13-.078.26-.156.364-.078.104-.182.182-.312.26-.104.052-.234.078-.364.052z"/>
        </svg>
      ),
      bgColor: 'bg-[#0068FF] hover:bg-[#0054CC]',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      bgColor: 'bg-[#1877F2] hover:bg-[#0d65d9]',
    },
    {
      name: 'Threads',
      href: `https://www.threads.net/intent/post?text=${encodeURIComponent(title + ' ' + url)}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.5-1.208 1.028-.045 1.964.062 2.793.32v-.398c0-1.478-.09-2.458-.567-3.095-.434-.58-1.163-.874-2.168-.874h-.06c-.832.008-1.492.234-1.961.673-.418.39-.67.923-.752 1.583l-2.088-.239c.136-1.07.567-1.97 1.282-2.674.86-.848 2.063-1.293 3.478-1.32h.109c1.794 0 3.18.555 4.121 1.65.866 1.008 1.048 2.318 1.048 4.296v.574c.899.473 1.635 1.109 2.168 1.897.746 1.102 1.025 2.439.83 3.975-.29 2.29-1.566 4.14-3.586 5.2-1.568.823-3.455 1.24-5.607 1.24zm.166-8.95c-1.054.047-1.878.34-2.393.853-.472.47-.688 1.058-.649 1.754.042.75.36 1.322.948 1.703.659.427 1.51.618 2.394.57 1.18-.064 2.065-.47 2.63-1.206.478-.623.762-1.46.853-2.49-.768-.226-1.63-.348-2.576-.348-.418 0-.821.024-1.207.064v.1z" />
        </svg>
      ),
      bgColor: 'bg-black hover:bg-gray-800',
    },
    {
      name: 'Instagram',
      href: `https://www.instagram.com/`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90',
      onClick: () => {
        // Instagram doesn't support direct sharing, open profile instead
        alert('Instagram에서는 직접 공유가 지원되지 않습니다. 링크를 복사해서 스토리에 붙여넣으세요.');
        navigator.clipboard.writeText(url);
      },
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => {
            if (link.onClick) {
              e.preventDefault();
              link.onClick();
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white transition-all ${link.bgColor}`}
          aria-label={`Share on ${link.name}`}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Copy link"
        title={copied ? '복사됨!' : '링크 복사'}
      >
        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      </button>

      {/* Print */}
      <button
        onClick={handlePrint}
        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
        aria-label="Print"
        title="프린트"
      >
        <Printer className="h-5 w-5" />
      </button>
    </div>
  );
}
