import MyTags from "./MyTags/MyTags";
import RecommendedTopics from "./RecommendedTopics/RecommendedTopics";

const RightSidebar = () => {
  return (
    <div className="p-5">
      <RecommendedTopics />
      <MyTags />
    </div>
  );
};

export default RightSidebar;
