import React from "react";

const About = () => {

  const imageStyle = "h-full w-fit translate-y-1 transition hover:drop-shadow-2xl hover:translate-y-0 hover:transition"

  const linkStyle = "underline hover:text-yellow-300 hover:transition"

  return (
    <div className="flex justify-center text-center text-black text-2xl m-10">
      <div>
        <div className="flex h-60 w-full items-center justify-center mb-10">
          <img
            className={imageStyle}
            src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
          />
          <img
            className={imageStyle}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
          />
          <img
            className={imageStyle}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          />
        </div>
        <h2>
          This site is a collection of useful web development resources created
          with{" "}
          <a
            className={linkStyle}
            href="https://supabase.com/"
          >
            Supabase
          </a>
          ,{" "}
          <a
            className={linkStyle}
            href="https://tailwindcss.com/"
          >
            TailwindCSS
          </a>{" "}
          and{" "}
          <a
            className={linkStyle}
            href="https://react.dev/"
          >
            React
          </a>
          .
        </h2>
        <br></br>
        <h2>
          Check out the GitHub repo{" "}
          <a
            className={linkStyle}
            href="https://github.com/UhOhSpiders/web-dev-resources"
          >
            here
          </a>
          .
        </h2>
      </div>
    </div>
  );
};

export default About;
