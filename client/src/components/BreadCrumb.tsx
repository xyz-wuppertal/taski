import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,

    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const BreadCrumb = ({ page }: { page?: string }) => {
    return (
        <Breadcrumb >
            <BreadcrumbList className="text-xl">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                {
                    page && ( 
                        <BreadcrumbSeparator />
                    )
                }
                <BreadcrumbItem>
                    <BreadcrumbPage>{page}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    )
}
export default BreadCrumb