import {
  bgSmallCircle,
  illustrationAustralia,
  illustrationCanada,
  illustrationUnitedKingdom,
  bgPattternAboutDesktop,
  bgPatternHeroContactMobile,
  iconError,
} from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  {/* Form Data */}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  {/* Form Errors */}
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  {/* Handle Input Change */}
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors((prevErrors) => ({ ...prevErrors, email: !emailRegex.test(value) }));
    } else if (name === "phone") {
      const phoneRegex = /^[0-9\s]*$/;
      setFormErrors((prevErrors) => ({ ...prevErrors, phone: value === "" || !phoneRegex.test(value) }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: value === "" }));
    }
  };

  {/* Handle Submit */}
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const errors = {
      name: name === "",
      email: email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      phone: phone === "" || !/^[0-9\s]*$/.test(phone),
      message: message === "",
    };
    setFormErrors(errors);

    if (!errors.name && !errors.email && !errors.phone && !errors.message) {
      alert("Thank you for your submission!");
      console.log(formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:gap-[160px] md:gap-[120px] max-sm:gap-0 w-full h-auto">
      {/* About Us */}
      <section className="w-full flex  rounded-[15px] bg-primary-Peach z-10 lg:flex-row lg:h-[480px] lg:justify-between flex-col max-sm:h-auto  max-sm:rounded-none relative overflow-hidden h-auto max-sm:px-6 max-sm:py-[62px] max-sm:gap-12 ">
        <img
          src={bgPattternAboutDesktop}
          alt="background Pattern"
          className="w-[640px] h-[640px] absolute z-0 bottom-0 lg:left-0 md:right-1/4 block max-sm:hidden"
        />
        <img
          src={bgPatternHeroContactMobile}
          alt="background Pattern"
          className="w-auto h-[292px] absolute z-0 top-0 left-0 max-sm:block hidden object-cover"
        />
        <div className=" text-primary-White flex-col flex items-center justify-center gap-8 h-full z-10 lg:w-[50%] w-full">
          <div className="lg:my-[20%] lg:mx-[15%] md:mt-[71px] md:mx-[58px] w-auto flex flex-col items-start gap-8">
            <h1 className="text-[48px] font-medium ">Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className=" text-primary-White flex-col flex items-center justify-center gap-8 w-full h-full z-10 lg:w-1/2 lg:py-[15%] lg:px-[5%] md:pb-[71px] md:px-[58px] md:pt-[40px] " onSubmit={handleSubmit}>
          <div className=" w-full flex flex-col items-end">
            <label htmlFor="name" className="text-[15px] font-medium"></label>
            <div className="w-full relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full h-[56px] bg-transparent px-4 placeholder:text-primary-White/50 text-[15px] border-b border-primary-White/50 outline-none cursor-pointer focus:border-b-2 focus:border-primary-White"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <div className="flex flex-row items-center gap-2 absolute top-[50%] transform -translate-y-[50%] right-0">
                  <p className="text-[12px] italic">Can't be empty</p>
                  <img
                    src={iconError}
                    alt="Error"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              )}
            </div>
            <label htmlFor="email" className="text-[15px] font-medium"></label>
            <div className="w-full relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-[56px] bg-transparent px-4 placeholder:text-primary-White/50 text-[15px] border-b border-primary-White/50 outline-none cursor-pointer focus:border-b-2 focus:border-primary-White"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="flex flex-row items-center gap-2 absolute top-[50%] transform -translate-y-[50%] right-0">
                  <p className="text-[12px] italic">Can't be empty</p>
                  <img
                    src={iconError}
                    alt="Error"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              )}
            </div>
            <label htmlFor="phone" className="text-[15px] font-medium"></label>
            <div className="w-full relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full h-[56px] bg-transparent px-4 placeholder:text-primary-White/50 text-[15px] border-b border-primary-White/50 outline-none cursor-pointer focus:border-b-2 focus:border-primary-White"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <div className="flex flex-row items-center gap-2 absolute top-[50%] transform -translate-y-[50%] right-0">
                  <p className="text-[12px] italic">Can't be empty</p>
                  <img
                    src={iconError}
                    alt="Error"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              )}
            </div>
            <label
              htmlFor="message"
              className="text-[15px] font-medium"
            ></label>
            <div className="w-full relative">
              <textarea
                id="message"
                name="message"
                className="w-full h-[100px] bg-transparent mt-4 px-4 placeholder:text-primary-White/50 text-[15px] border-b border-primary-White/50 outline-none cursor-pointer focus:border-b-2 focus:border-primary-White"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {formErrors.message && (
                <div className="flex flex-row items-center gap-2 absolute top-[50%] transform -translate-y-[50%] right-0">
                  <p className="text-[12px] italic">Can't be empty</p>
                  <img
                    src={iconError}
                    alt="Error"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              )}
            </div>
            <button
              className="mt-8"
              type="submit"
            >
              <span className="flex items-center justify-center w-[152px] h-[56px] bg-primary-White text-primary-Black z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach hover:text-primary-White">
                Submit
              </span>
            </button>
          </div>
        </form>
      </section>

      {/* Locations */}
      <section className="w-full max-sm:px-6 max-sm:py-[120px] z-10">
        <div className="flex w-full lg:gap-[30px] lg:flex-row md:gap-[80px] md:flex-col max-sm:flex-col max-sm:gap-[48px] justify-between h-auto ">
          {/* Canada */}
          <div className="flex items-center justify-center w-full lg:gap-[48px] lg:flex-col md:flex-col md:gap-[80px] max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationCanada}
                alt="Canada"
                className="w-full h-auto"
              />
            </div>

            <div className=" flex flex-col items-center gap-8 lg:text-center md:text-left max-sm:text-center w-full mt-[48px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[5px]">
                Canada
              </h3>
              <Link
                to={"/locations#canada"}
                className=" flex items-center justify-center w-[152px] h-[56px] bg-primary-Peach text-primary-White z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach"
                onClick={() => window.scrollTo(0, 0)}
              >
                See Location
              </Link>
            </div>
          </div>

          {/* Australia */}
          <div className="flex items-center justify-center  w-full lg:gap-[48px] lg:flex-col md:gap-[80px] md:flex-col max-sm:gap-[48px] max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationAustralia}
                alt="Australia"
                className="w-full h-auto"
              />
            </div>
            <div className=" flex flex-col items-center gap-8 lg:text-center md:text-left max-sm:text-center w-2/3 mt-[48px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[5px]">
                Australia
              </h3>
                <Link
                to={"/locations#australia"}
                className=" flex items-center justify-center w-[152px] h-[56px] bg-primary-Peach text-primary-White z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach"

                >
                See Location
                </Link>
            </div>
          </div>

          {/* United Kingdom */}
          <div className="w-full flex items-center justify-center lg:gap-[48px] lg:flex-col md:flex-col md:gap-[80px] max-sm:gap-[48px] max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationUnitedKingdom}
                alt="United Kingdom"
                className="w-full h-auto"
              />
            </div>

            <div className=" flex flex-col items-center gap-8 lg:text-center md:text-left max-sm:text-center w-full mt-[48px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[5px]">
                United Kingdom
              </h3>
              <Link
                to={"/locations#unitedKingdom"}
                className=" flex items-center justify-center w-[152px] h-[56px] bg-primary-Peach text-primary-White z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach"
              >
                See Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
