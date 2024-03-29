import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  const email = "alam.naseralam@gmail.com";
  const emailLink = `mailto:${email}`;
  const location = "Dhaka, Bangladesh";

  return (
    <section
      id="contact"
      className="lg:px-20 ssm:px-5 py-10 min-h-screen bg-gray-100"
    >
      <div className="py-5 mb-10 flex flex-col items-center">
        <h1 className="pb-5 text-3xl font-sans font-semibold uppercase text-blue-700">
          Get in Touch
        </h1>
        <hr className=" bg-gray-500 w-20 flex-grow h-0.5" />
      </div>
      <div class="relative flex items-top justify-center sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2">
                  Don't be shy! Hit me up!
                </p>

                <div class="flex items-center mt-8 text-gray-600">
                  <GrLocation
                    size={40}
                    className="rounded-full shadow-2xl hover:border-2 hover:text-blue-500"
                  />
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    {location}
                  </div>
                </div>

                <a
                  href={emailLink}
                  class="flex items-center mt-2 text-gray-600 hover:cursor-pointer "
                >
                  <MdOutlineEmail
                    size={40}
                    className="rounded-full shadow-2xl hover:border-2 hover:text-blue-500"
                  />
                  <div class="ml-4 text-md tracking-wide w-40">{email}</div>
                </a>
              </div>

              <form class="p-6 flex flex-col justify-center">
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400  text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label for="email" class="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label for="tel" class="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400  text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  class="md:w-32 bg-blue-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
