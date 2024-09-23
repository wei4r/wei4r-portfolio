import Link from 'next/link';

const SocialButton = ({ href, name, color, icon }) => (
  <Link
    href={href}
    className={`group mt-2 inline-flex items-center justify-center h-12 w-12 hover:w-28 rounded-full border-2 border-${color} text-gray-300 hover:border-${color} hover:bg-${color} hover:text-white transition-all duration-300 overflow-hidden`}
    aria-label={`${name} Profile`}
  >
    <div className="flex items-center justify-center w-full transition-all duration-300">
      <div className="flex justify-center w-12 group-hover:w-0 transition-all duration-300 overflow-hidden">
        {icon}
      </div>
      <span className="font-bold w-0 group-hover:w-full overflow-hidden transition-all duration-300 flex items-center justify-center">
        {name}
      </span>
    </div>
  </Link>
);

export default SocialButton;