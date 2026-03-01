import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export default function Communication() {
  return (
    <div className="mt-4 flex gap-3 text-sm text-neutral-600">
      <a aria-label="Instagram" href="#">
        <AiFillInstagram className="text-xl" />
      </a>
      <a aria-label="LinkedIn" href="#">
        <FaLinkedinIn className="text-xl" />
      </a>
      <a aria-label="Twitter" href="#">
        <FaTwitter className="text-xl" />
      </a>
      <a aria-label="Email" href="#">
        <IoMdMail className="text-xl" />
      </a>
      <a aria-label="Facebook" href="#">
        <FaFacebookF className="text-xl" />
      </a>
    </div>
  );
}