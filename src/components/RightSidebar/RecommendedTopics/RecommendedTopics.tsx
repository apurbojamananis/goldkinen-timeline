const topics: string[] = [
  "Programming",
  "Education",
  "History",
  "Science",
  "Humor",
  "Work",
  "Health",
  "Business",
  "Marketing",
];

const RecommendedTopics = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-lg font-semibold pb-2 border-b border-gray-300">Recommended topics</h1>
        <div className="flex flex-wrap gap-3 py-3">
          {topics.map((topic) => (
            <span className="italic bg-gray-100 py-2 px-3 rounded-full cursor-pointer hover:bg-gray-300">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedTopics;
