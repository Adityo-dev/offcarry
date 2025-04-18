import { Clock7, MapPinned, PhoneCall } from "lucide-react";

// FOOTER CONTACTS INFO DATA
const contactInfoData = [
  {
    icon: <PhoneCall size={30} strokeWidth={1.5} />,
    title: "Request A Call:",
    text: "+8801973239675",
    link: "https://wa.me/+8801973239675",
  },
  {
    icon: <Clock7 size={30} strokeWidth={1.5} />,
    title: "Sunday To Friday:",
    text: "+8801973239675",
    link: "https://wa.me/+8801973239675",
  },
  {
    icon: <MapPinned size={30} strokeWidth={1.5} />,
    title: "",
    text: "85, Mir Mosharrat Hossain Rd. Khustia. \n7000 Bangladesh",
    link: "https://www.google.com/maps?q=85,+Mir+Mosharrat+Hossain+Rd,+Khustia,+7000,Bangladesh",
  },
];

function ContactInfo() {
  return (
    <section className="container mx-auto px-2">
      <div className="bg-[#2A3A3E]  rounded-lg flex flex-col lg:flex-row gap-7 items-center justify-between py-7 px-12">
        {contactInfoData.map((contact, ind) => (
          <div
            key={ind}
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <p>{contact?.icon}</p>
            <p className="flex flex-col text-sm md:text-base text-[#DDE2E5] whitespace-pre-line text-center lg:text-start">
              <span>{contact?.title}</span>
              {contact?.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  className="text-[#DDE2E5] hover:underline"
                >
                  {contact?.text}
                </a>
              ) : (
                <span>{contact?.text}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
