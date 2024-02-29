import Card from "./Card";
import "../index.css";

const Category = ({ title, tools }) => {
  return (
    <section className="mt-16 mx-auto md:max-lg:flex md:max-lg:flex-col md:max-lg:justify-center lg:max-w-[940px] 2xl:max-w-[1395px] px-10">
      <div className="max-lg:text-center">
        <h1 className="text-white text-[40px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-poppins font-bold tracking-[1.75px]">
          {title}
        </h1>
      </div>
      <div className="mt-10 flex flex-wrap gap-[80px] items-center max-lg:justify-center">
        {/* Map through your Card components here */}

        {tools.map((tool) => (
          <Card
            key={tool.name} // It's important to include a unique key for each item when mapping over an array
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
