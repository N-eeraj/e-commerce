// react imports
import { FC } from 'react'

// shadcn/ui imports
import { TabsContent } from '@ui/tabs'

// hook imports
import usePayment from '@hooks/usePayment'

const TabContents: FC = () => {
  const { tabContents } = usePayment()

  return (
    tabContents.map(({ component: Component, value }) => (
      <TabsContent
        value={value}
        key={value}>
        <Component />
      </TabsContent>
    ))
  )
}

export default TabContents