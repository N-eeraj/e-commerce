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

  return (
    <div className="flex flex-col gap-y-2">
      <span className="font-semibold">
        Categories
      </span>

      { isPending ?
          <CategoryList /> :
          <RadioGroup
            defaultValue={String(categoryId)}>
            { categories?.map(({ id, name }) => (
                <Label
                  className="flex items-center gap-x-2 w-fit"
                  key={id}>
                  <RadioGroupItem value={String(id)} />
                  <span className="cursor-pointer">
                    {name}
                  </span>
                </Label>
              ))
            }
          </RadioGroup>
      }
    </div>
  )
}

export default Category
