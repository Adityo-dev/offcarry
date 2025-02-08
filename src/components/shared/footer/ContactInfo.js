import { Clock7, MapPinned, PhoneCall } from "lucide-react";

// FOOTER CONTACTS INFO DATA
const contactInfoData = [
  {
    icon: <PhoneCall size={36} strokeWidth={1.5} />,
    title: "Request A Call:",
    text: "+8801973239675",
  },
  {
    icon: <Clock7 size={36} strokeWidth={1.5} />,
    title: "Sunday To Friday:",
    text: "+8801973239675",
  },
  {
    icon: <MapPinned size={36} strokeWidth={1.5} />,
    title: "",
    text: "85, Mir Mosharrat Hossain Rd. Khustia. \n7000 Bangladesh",
  },
];

function ContactInfo() {
  return (
    <section className="container mx-auto px-4 bg-[#2A3A3E] rounded-lg">
      <div className="flex items-center justify-between py-7 px-12">
        {contactInfoData.map((contact, ind) => (
          <div key={ind} className="flex items-center gap-4">
            <p>{contact?.icon}</p>
            <p className="flex flex-col text-[#DDE2E5] whitespace-pre-line">
              <span>{contact?.title}</span>
              <span>{contact?.text}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
