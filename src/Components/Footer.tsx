import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-lg font-semibold">Developed by Nandakishor More</h2>
        <p className="text-sm text-gray-400 mt-2">
          Passionate full-stack developer focused on smart, user-friendly
          solutions.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/nandakishormore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/nandakishormore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/nandakishor910"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Twitter />
          </a>
        </div>

        <hr className="border-gray-700 my-5" />
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Nandakishor More. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
