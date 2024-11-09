import React from "react";

interface FooterProps {
  github: string;
  username: string;
}

const Footer: React.FC<FooterProps> = ({ github, username }) => (
  <footer className="mt-12">
    <p className="text-center text-zinc-400">
      Made with ❤️ by{" "}
      <a href={github} className="text-red-300 hover:underline">
        {username}
      </a>
    </p>
  </footer>
);

export default Footer;
