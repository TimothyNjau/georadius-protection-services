import Image from "next/image";
import SecImage from "@/public/assets/images/context-contact.jpg";

const Contact = () => {
  return (
    <>
      <section>
        <section className="h-[30vh] relative  overflow-hidden  ">
          <Image
            src={SecImage}
            alt="Image of security"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="z-10 text-white absolute top-30 left-50 text-2xl lg:text-3xl">
            <h2>Reach Out To Us</h2>
          </div>
        </section>
        <section className="grid grid-cols-2 mx-8 justify-around mt-10 px-2">
          <div className="flex flex-col gap-5">
            <h1 className="uppercase text-2xl lg:text-3xl text-prim font-semibold">
              Trust Us with your safety
            </h1>
            <div className="flex flex-col gap-8 text-">
              <h2>First Floor, Rowini House, Ruiru Town</h2>
              <div>
                <h1>Email US</h1>
                <h2>georadiusprotection@gmail.com</h2>
              </div>
              <div>
                <h1>Call Us</h1>
                <h2>0725 572 720</h2>
              </div>
            </div>
          </div>
          <div>
            <form >
              <h2>Send Us A Message</h2>
              <div className="flex flex-col ">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sec"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sec"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter the subject of your message"
                  className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sec"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here.."
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sec"
                ></textarea>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
