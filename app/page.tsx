import ContactForm from "./contact-form";

export default function Home() {
  return (
    <>
    <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Get started by filling out the form</li>
          <li>Submit and check your whatsapp</li>
          <li>Follow the link and select your Zebra</li>
        </ol>

        <ContactForm />
    </>
  );
}
