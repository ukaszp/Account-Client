import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";


export default function Footer() {
  return (
    <div>
      <footer className="bg-primary text-center text-white dark:bg-neutral-600">
        <div className="container pt-9">
          <div className="mb-9 flex justify-center">
            <a className="mr-9 text-secondary dark:text-neutral-200" href="/">
              <FacebookIcon />
            </a>
            <a className="mr-9 text-secondary dark:text-neutral-200">
              <TwitterIcon />
            </a>
            <a className="mr-9 text-secondary dark:text-neutral-200">
             <InstagramIcon />
            </a>
            <a className="mr-9 text-secondary dark:text-neutral-200">
              <LinkedinIcon />
            </a>
            <a className="mr-9 text-secondary dark:text-neutral-200" href="https://github.com/ukaszp">
              <GithubIcon />
            </a>
          </div>
        </div>

        <div className="bg-primary p-4 text-center text-secondary dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-gray-300 dark:text-neutral-400"
            href="/"
          >
            SAMPLE
          </a>
        </div>
      </footer>
    </div>
  );
}
