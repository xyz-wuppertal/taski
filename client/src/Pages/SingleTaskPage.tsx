import BreadCrumb from "@/components/BreadCrumb"
import { useFetchSingleTask } from "@/api/querys";
import { useParams } from "react-router-dom";

const SingleTaskPage = () => {
 const taskId = useParams().taskId;
 if (!taskId) { 
  return <div>No taskId provided</div>;
 }
 const { data, isLoading, isError } = useFetchSingleTask({taskId});
 if (isLoading) {
  return <div>Loading...</div>;
}
if (isError) {
  return <div>Error loading tasks</div>;
}
if (!data) {
  return <div>No tasks</div>;
}
console.log(data)
  return (
   <div className="flex flex-col gap-4 relative">
   <div className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
       <BreadCrumb page="Task Name" />
   </div>
   <div className="px-6">

was  
 </div>
</div>
  )
}

export default SingleTaskPage