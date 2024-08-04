// react imports
import { FC } from 'react'

// component imports
import ProductCard from '@components/Home/Products/Card'

// type imports
import ClassNameProp from '@customTypes/classNameProp'

const index: FC<ClassNameProp> = ({ className }) => {
  return (
    <section className={`flex flex-col gap-y-2 px-2 md:px-4 ${className}`}>
      <h2 className="text-2xl text-primary-dark font-semibold">
        Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 self-center max-w-4xl">
        {Array.from({length:12}).map((_, i) => <ProductCard key={i} />)}
      </div>
    </section>
  )
}

export default index
