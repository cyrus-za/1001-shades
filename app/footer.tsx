import Image from "next/image";

export default function Footer() {
  return <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://developer.investec.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="https://nextjs.org/icons/file.svg"
        alt="File icon"
        width={16}
        height={16}
      />
      Docs
    </a>
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://investec.gitbook.io/programmable-banking-community-wiki"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="https://nextjs.org/icons/window.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
      Wiki
    </a>
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://github.com/devinpearson/programmable-banking-sim"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="https://nextjs.org/icons/github.svg"
        alt="Github icon"
        width={16}
        height={16}
      />
      Github
    </a>
  </footer>
}