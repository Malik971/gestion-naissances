import { FORMAT_DATE } from '@/utils'
import ActionButton from '../shared/ActionButton'
import StatusBadge from '../shared/StatusBadge'
import type { Declaration } from '@/types/Declaration'

type Props = {
  declaration: Declaration;
  index: number; 
}

function DeclarationArticle({declaration: item, index}: Props) {
  return (
            <article
          className={`grid grid-cols-12 text-gray-700 border-b ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <span className={`p-2`}>
            {FORMAT_DATE(item.registered)}
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.child.firstName}</span>
            <span className="uppercase">{item.child.lastName}</span>
          </span>
          <span className={`p-2`}>
            {item?.child?.brithDate ? FORMAT_DATE(item.child.brithDate) : null}
          </span>
          <span className={`p-2`}>
            <span className={`p-2 col-span-1.5 flex flex-col`}>
              {item.company.name}
            </span>
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.firstParent.firstName}</span>
            <span>{item.firstParent.lastName}</span>
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.seconParent.firstName}</span>
            <span>{item.seconParent.lastName}</span>
          </span>
          <StatusBadge status={item.status} />
          <ActionButton classes="p-2 col-span-2 flex flex-col" action={() => null}>
            <span>action</span>
          </ActionButton>
        </article>
  )
}

export default DeclarationArticle