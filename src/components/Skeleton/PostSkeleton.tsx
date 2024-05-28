import { Skeleton } from "../ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="p-5">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-3">
        <Skeleton className="h-10 w-full rounded-xl" />
        <div className="space-y-1">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
