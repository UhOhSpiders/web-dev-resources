import React from "react";

const About = () => {
  const imageStyle =
    "w-1/3 max-w-fit translate-y-1 transition hover:drop-shadow-2xl hover:translate-y-0 hover:transition";

  const linkStyle = "underline hover:text-purple-700 hover:transition";

  return (
    <div className="flex justify-center text-center text-black text-2xl m-10 md:m-32">
      <div>
        <div className="flex h-60 w-full items-center justify-center md:mb-20">
        <a className={imageStyle} href="https://supabase.com/">
          <img
            src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
          />
          </a>
          <a className={imageStyle} href="https://tailwindcss.com/">
          <img
            
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
          />
          </a>
         
          <a className={imageStyle} href="https://react.dev/">
            <img
              className={`brightness-90 saturate-150 `}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            />
          </a>
        </div>
        <h2>
          This site is a collection of useful web development resources created
          with{" "}
          <a className={linkStyle} href="https://supabase.com/">
            Supabase
          </a>
          ,{" "}
          <a className={linkStyle} href="https://tailwindcss.com/">
            TailwindCSS
          </a>{" "}
          and{" "}
          <a className={linkStyle} href="https://react.dev/">
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
