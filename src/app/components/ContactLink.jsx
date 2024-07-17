import React, { useEffect, useState } from 'react';

export default function ContactLink() {
  const [label, setLabel] = useState('Contact');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = 'hankwei02151@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setLabel('Copied\u00A0\u00A0');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
          setLabel('Contact');
        }, 1500);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  const classNotCopied = 'inline-flex mt-2 items-center sm:w-fit font-bold mr-4 py-2 px-4 border-2 rounded-full border-blue-600 text-gray-300 hover:bg-blue-600 hover:text-white transition duration-300';
  const classCopied = 'inline-flex mt-2 items-center sm:w-fit font-bold mr-4 py-2 px-4 border-2 rounded-full transition duration-300 bg-blue-600 border-blue-600 text-white';

  return (
    <button
      onClick={handleCopy}
      className={copied ? classCopied : classNotCopied}
    >
      <svg className="h-4 w-4 mr-2 pb-4px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 4v16h24V4H0zm22 2v.01L12 13 2 6V6h20zM2 18V8l10 7 10-7v10H2z" />
      </svg>
      <span>{label}</span>
    </button>
  );
}
