import { Separator } from '@/components/ui/separator'
import { Input } from './ui/input'
import { CircleUserRound } from 'lucide-react'

const CommentForm = () => {
  return (
    <div className='flex flex-col m-auto gap-y-6 w-[80%]'>
      <div className='grid  items-center grid-rows-1'>
        <Separator />
        <CircleUserRound className='relative top-8 left-2' />
        <Input placeholder='Add a comment' className='pl-10 col-span-full' />
      </div>
      <Separator />
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <CircleUserRound />
          <p className=' px-2'>User Name</p>
          <p className='text-xs text-slate-500	'>19m</p>
        </div>
        <div className='pt-3'>
          {' '}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          maiores quod asperiores reiciendis dolor. Tempora quae rem enim
          voluptate omnis voluptas? Iure, magni obcaecati. Voluptatem nobis
          pariatur animi facere ipsa.
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <CircleUserRound />
          <p className=' px-2'>User Name</p>
          <p className='text-xs text-slate-500	'>19m</p>
        </div>
        <div className='pt-3'>
          {' '}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          maiores quod asperiores reiciendis dolor. Tempora quae rem enim
          voluptate omnis voluptas? Iure, magni obcaecati. Voluptatem nobis
          pariatur animi facere ipsa.
        </div>
      </div>

      <Separator />
    </div>
  )
}

export default CommentForm
