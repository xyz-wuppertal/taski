vimport { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import React, { useEffect, useState } from "react"
import { Input } from "./ui/input"
import {
DropdownMenu,
DropdownMenuCheckboxItem,
DropdownMenuContent,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { columns } from "@/components/colmuns"
import { useFetchTasks } from "@/api/querys"

export function TasksTable() {
const { data, isLoading, isError } = useFetchTasks();
const [sortedGroups, setSortedGroups] = useState([]);

useEffect(() => {
if (data) {
const priorityOrder = ['High', 'Medium', 'Low'];
const sortedData = priorityOrder.map(priority =>
data.GroupByPriority.find(group => group._id === priority))
.filter(group => group !== undefined);
setSortedGroups(sortedData);
}
}, [data]);





const [sorting, setSorting] = React.useState<SortingState>([])
const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
[]
)
const [columnVisibility, setColumnVisibility] =
React.useState<VisibilityState>({})
const [rowSelection, setRowSelection] = React.useState({})

const table = useReactTable({
data: sortedGroups.flatMap(group => group.tasks),
columns,
onSortingChange: setSorting,
onColumnFiltersChange: setColumnFilters,
getCoreRowModel: getCoreRowModel(),
getPaginationRowModel: getPaginationRowModel(),
getSortedRowModel: getSortedRowModel(),
getFilteredRowModel: getFilteredRowModel(),
onColumnVisibilityChange: setColumnVisibility,
onRowSelectionChange: setRowSelection,
state: {
sorting,
columnFilters,
columnVisibility,
rowSelection,
},
})
if (isLoading) {
return <div>Loading...</div>;
}
if (isError) {
return <div>Error loading tasks</div>;
}
if (!data) {
return <div>No tasks</div>;
}
// const { GroupByPriority } = data

return (
<div className="w-full p-6">
<div className="flex items-center py-4">
<Input
placeholder="Filter emails..."
value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
onChange={(event) =>
table.getColumn("email")?.setFilterValue(event.target.value)
}
className="max-w-sm"
/>
<DropdownMenu>
<DropdownMenuTrigger asChild>
<Button variant="outline" className="ml-auto">
Columns <ChevronDown className="ml-2 h-4 w-4" />
</Button>
</DropdownMenuTrigger>
<DropdownMenuContent align="end">
{table
.getAllColumns()
.filter((column) => column.getCanHide())
.map((column) => {
return (
<DropdownMenuCheckboxItem
key={column.id}
className="capitalize"
checked={column.getIsVisible()}
onCheckedChange={(value) =>
column.toggleVisibility(!!value)
}
>
{column.id}
</DropdownMenuCheckboxItem>
)
})}
</DropdownMenuContent>
</DropdownMenu>
</div>
<div className="rounded-md border">
<Table>
<TableHeader>
{table.getHeaderGroups().map((headerGroup) => (
<TableRow key={headerGroup.id}>
{headerGroup.headers.map((header) => {
return (
<TableHead key={header.id}>
{header.isPlaceholder
? null
: flexRender(
header.column.columnDef.header,
header.getContext()
)}
</TableHead>
)
})}
</TableRow>
))}
</TableHeader>
<TableBody>
{table.getRowModel().rows?.length ? (
table.getRowModel().rows.map((row) => (
<TableRow
key={row.id}
data-state={row.getIsSelected() && "selected"}
>
{row.getVisibleCells().map((cell) => (
<TableCell key={cell.id}>
{flexRender(
cell.column.columnDef.cell,
cell.getContext()
)}
</TableCell>
))}
</TableRow>
))
) : (
<TableRow>
<TableCell
colSpan={columns.length}
className="h-24 text-center"
>
No results.
</TableCell>
</TableRow>
)}
</TableBody>
</Table>
</div>
<div className="flex items-center justify-end space-x-2 py-4">
<div className="flex-1 text-sm text-muted-foreground">
{table.getFilteredSelectedRowModel().rows.length} of{" "}
{table.getFilteredRowModel().rows.length} row(s) selected.
</div>
<div className="space-x-2">
<Button
variant="outline"
size="sm"
onClick={() => table.previousPage()}
disabled={!table.getCanPreviousPage()}
>
Previous
</Button>
<Button
variant="outline"
size="sm"
onClick={() => table.nextPage()}
disabled={!table.getCanNextPage()}
>
Next
</Button>
</div>
</div>
</div>
)
}

