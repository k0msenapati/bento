import React from "react";
import Block from "./Block";
import { FiMail } from "react-icons/fi";

interface EmailListBlockProps {
  email: string;
}

const EmailListBlock: React.FC<EmailListBlockProps> = ({ email }) => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Shoot an email</p>
    <div className="flex items-center gap-2">
      <p className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5">{email}</p>
      <a href={`mailto:${email}`}>
        <button className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300">
          <FiMail /> 
          <span className="hidden md:block">Send Mail</span>
        </button>
      </a>
    </div>
  </Block>
);

export default EmailListBlock;
