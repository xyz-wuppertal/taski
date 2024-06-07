import BreadCrumb from "@/components/BreadCrumb"
import CreateTaskForm from "@/components/CreateTaskForm"

const CreateTaskPage = () => {
    return (
        <div className="flex flex-col gap-4 relative">
            <div className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
                <BreadCrumb page="Create Task" />
            </div>
            <div className="px-8">
                <CreateTaskForm />
            </div>
        </div>
    )
}
export default CreateTaskPage