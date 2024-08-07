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
  const { categoryId, updateProductFilter } = useProductFilter()

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-base font-medium">
        Categories
      </span>

      { isPending ?
          <CategoryList /> :
          <RadioGroup
            value={String(categoryId)}
            defaultValue={String(categoryId)}
            className="flex flex-col gap-y-3"
            onValueChange={value => updateProductFilter('categoryId', value)}>
            { categories?.map(({ id, name }) => (
                <Label
                  className="flex items-center gap-x-2 w-fit"
                  key={id}>
                  <RadioGroupItem value={String(id)} />
                  <span className="font-normal cursor-pointer">
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
