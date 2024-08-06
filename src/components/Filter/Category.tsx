// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Label } from '@ui/label'
import { RadioGroup, RadioGroupItem } from '@ui/radio-group'

// component imports
import CategoryList from '@skeletons/Category/List'

// hook imports
import useFetchCategories from '@hooks/useFetchCategories'
import useProductFilter from '@hooks/useProductFilter'

const Category: FC = () => {
  const { categories, isPending }  = useFetchCategories()
  const { categoryId } = useProductFilter()

  if (isPending) return <CategoryList />

  if (categories) {
    return (
      <RadioGroup
        defaultValue={String(categoryId || categories[0].id)}>
        { categories?.map(({ id, name }) => (
            <Label
              className="flex items-center gap-x-2"
              key={id}>
              <RadioGroupItem value={String(id)} />
              <span className="cursor-pointer">
                {name}
              </span>
            </Label>
          ))
        }
      </RadioGroup>
    )
  }
}

export default Category
