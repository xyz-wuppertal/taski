
import { Search } from 'lucide-react'
import { Input } from './ui/input'

const Infobar = () => {
    return (
        <div className="flex flex-row justify-end gap-6 items-center px-4 py-6 w-full dark:bg-black ">
            <span className="flex items-center rounded-full bg-muted px-4">
                <Search />
                <Input
                    placeholder="Quick Search"
                    className="border-none bg-transparent"
                />
            </span>
        </div>
    )
}
export default Infobar