const topics: string[] = [
  "#javascript",
  "#typescript",
  "#nodejs",
  "#react",
  "#redux",
  "#rtk-query",
  "#tailwind",
  "#shadcn/ui",
];

const MyTags = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-lg font-semibold pb-2 border-b border-gray-300">My Tags</h1>
        <div className="flex flex-wrap gap-3 py-3">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="italic bg-gray-100 py-2 px-3 rounded-full cursor-pointer hover:bg-gray-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTags;
