import { LayoutDashboard, Kanban, ClipboardList } from "lucide-react"

export const menuOptions = [
    {
        name: 'Dashboard', Component: <LayoutDashboard />, href: '/'
    },
    { name: 'kanban', Component: <Kanban />, href: '/kanban' },
    { name: 'create Task', Component: <ClipboardList />, href: '/create-task' },
]