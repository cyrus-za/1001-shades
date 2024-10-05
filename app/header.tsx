import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex items-center ml-4 text-2xl text-shadow-lg bg-gradient-to-r from-white to-black animate-gradient-x p-2">
      <Image
        className="dark:invert"
        src="/logo.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <span>
        <span className="text-gray-800">1001</span>{' '}
        <span className="text-gray-800">S</span>
        <span className="text-gray-700">h</span>
        <span className="text-gray-500">a</span>
        <span className="text-gray-400">d</span>
        <span className="text-gray-300">e</span>
        <span className="text-gray-200">s</span>{' '}
        <span className="text-gray-100">of</span>{' '}
        <span className="text-gray-50">Grey</span>
      </span>
    </div>
  );
}
