import { useState } from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export default function ContactInfo() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex gap-6 p-4 mt-21 ">
      {/* Location */}
      <div className="border border-green-200 rounded-lg p-4 flex flex-col gap-4 max-w-xs">
        <div className="bg-green-100 w-9 h-9 rounded-full flex items-center justify-center text-green-600">
          <HiLocationMarker size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase">Our Location</span>
          <p className="text-xs text-gray-600">
            1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="border border-green-200 rounded-lg p-4 flex flex-col gap-4 max-w-xs w-[320px]">
        <div className="bg-green-100 w-9 h-9 rounded-full flex items-center justify-center text-green-600">
          <HiPhone size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase">Call us 24/7</span>
          <p className="text-green-600 font-semibold text-sm">(303) 555-0105</p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border border-green-200 rounded-lg p-4 flex flex-col gap-4 flex-1 max-w-2xl">
        <div className="bg-green-100 w-9 h-9 rounded-full flex items-center justify-center text-green-600">
          <HiMail size={20} />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-xs font-semibold uppercase">
            Subscribe Newsletter
          </span>
          <div className="flex mt-1">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-3 py-2 border border-green-200 rounded-l-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-r-lg text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
