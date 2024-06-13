import { createBrowserRouter } from "react-router-dom"
import DashboardPage from "./Pages/DashboardPage"
import CreateTaskPage from "./Pages/CreateTaskPage"
import Layout from "./components/Layout"
import KanbanPage from "./Pages/KanbanPage"
import SingleTaskPage from "./Pages/SingleTaskPage"
export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Layout />
            </>
        ,

        children: [
            {
                index: true,
                element:
                    <DashboardPage
                    />
            },
            {
                path: "create-task",
                element: <CreateTaskPage />
            },
            {
                path: "kanban",
                element: <KanbanPage />
            },
            {
                path: "task/:taskId",
                element: <SingleTaskPage />
            }
        ]
    },

])