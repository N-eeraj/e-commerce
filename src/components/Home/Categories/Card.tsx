// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// type imports
import PropsType from '@customTypes/categoryCardProps'

const Card: FC<PropsType> = ({ id, name,image }) => {
  return (
    <Link to={`/products?category=${id}`} className="group relative block size-full rounded-lg overflow-hidden">
      <img src={image} alt={name} className="group-hover:scale-125 duration-300" />
      <div className="absolute bottom-0 left-0 w-full h-full p-2 bg-gradient-to-b from-primary/10 via-transparent via-75% to-black/60 scale-y-[2] translate-y-1/2 group-hover:-translate-y-1/2 duration-300" />
      <strong className="absolute bottom-2 left-2 text-white">
        {name}
      </strong>
    </Link>
  )
}

export default Card
