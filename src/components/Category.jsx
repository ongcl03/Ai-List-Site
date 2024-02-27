import React from "react";
import Card from "./Card";

const Category = ({ title, tools }) => {
  return (
    // Add h-screen to the parent container and overflow-auto to allow scrolling if content exceeds the viewport height
    <section className="mt-24 ml-14 sm:ml-16 lg:ml-[142px] flex flex-col p-[10px]">
      <div>
        <h1 className="text-white text-[40px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-poppins font-bold tracking-[1.75px]">
          {title}
        </h1>
      </div>
      <div className="mt-10 flex flex-wrap gap-[80px] items-center">
        {/* Map through your Card components here */}

        {tools.map((tool) => (
          <Card
            name={tool.name}
            link={tool.link}
            description={tool.description}
            image={tool.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
