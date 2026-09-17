"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SUBJECT_OPTIONS = ["Service type", "DevOps Engineer", "UI/UX Designer"];

interface ConsultingFormProps {
  /** Extra class appended to "form-contact" — the home page passes "right"
   *  to match the two-column layout in section-contact-inner. */
  className?: string;
}

// The "Subjects" field in the original form-contact markup is a plain
// <div class="nice-select"> shell — the actual open/close + option-select
// behavior comes entirely from jquery.nice-select.min.js (assets/js/plugin),
// which toggles "open" on the wrapper and "selected" on the picked <li>.
// Reproduced here with local state instead: click the current value to
// toggle "open", click an option to select it and close, click outside to
// close (the plugin does the same). See _niceSelect.scss for the CSS that
// actually shows/hides .list based on these classes.
export default function ConsultingForm({ className = "" }: ConsultingFormProps) {
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <form
      action="#"
      className={`form-contact${className ? ` ${className}` : ""}`}
    >
      <div className="img-bg">
        <Image
          src="/assets/images/widget/bg-form-contact.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 580px"
        />
      </div>
      <div className="form-content">
        <p className="title-form text-title-1 fw-7 letter-space--3">
          Free Consulting AI Solutions
        </p>

        <fieldset>
          <label htmlFor="name" className="text-body-2 letter-space--2 fw-5 title-input">
            Full Name
          </label>
          <input type="text" name="name" id="name" placeholder="Your name here" required />
        </fieldset>

        <fieldset>
          <label htmlFor="email" className="text-body-2 letter-space--2 fw-5 title-input">
            Email Address
          </label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required />
        </fieldset>

        <div className="col g-20">
          <fieldset className="col-item">
            <label htmlFor="phone" className="text-body-2 letter-space--2 fw-5 title-input">
              Phone Number
            </label>
            <input type="number" name="phone" id="phone" placeholder="Phone" required />
          </fieldset>

          <fieldset className="col-item">
            <p className="text-body-2 letter-space--2 fw-5 title-input">Subjects</p>
            <div
              className={`nice-select${isOpen ? " open" : ""}`}
              ref={selectRef}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="current caption-1">{subject}</span>
              <ul className="list">
                {SUBJECT_OPTIONS.map((option, index) => (
                  <li
                    key={option}
                    className={`option${option === subject ? " selected" : ""}${
                      index === 0 ? " option-all" : ""
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSubject(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>
        </div>

        <fieldset className="mess-input">
          <label htmlFor="mess" className="text-body-2 letter-space--2 fw-5 title-input">
            Write Message
          </label>
          <textarea name="mess" id="mess" placeholder="your message"></textarea>
        </fieldset>

        <button type="submit" className="tf-btn style-big style-gradient-2">
          <span className="text-btn">Get Consultations</span>
          <span className="icon-btn">
            <i className="icon-chevron-right"></i>
          </span>
        </button>
      </div>
    </form>
  );
}
