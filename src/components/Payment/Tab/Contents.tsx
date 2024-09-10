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
        key={value}
        className="flex-1 p-4 md:p-6 bg-primary-foreground/30 border border-primary-foreground rounded">
        <Component />
      </TabsContent>
    ))
  )
}

export default TabContents