import Image from "next/image";

export default function PostSubmit() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Thank you for submitting.</h1>
      <span className="flex flex-row items-center">
        <span>Please check your</span> 
        <a href="https://web.whatsapp.com" target="_blank" className="text-blue-500 flex items-center"><Image aria-hidden src="/whatsapp.svg" alt="Globe icon" width={16} height={16} className="mr-1" />Whatsapp </a>
        <span>for further steps to choose your Zebra.</span>
      </span>
    </div>
  )
}
