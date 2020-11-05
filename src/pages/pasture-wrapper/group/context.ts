import React from 'react'
import { GroupProps } from '@/types/animal'

interface GroupListProps {
    groupList: GroupProps[]
    setGroupList: (list: GroupProps[]) => void
}

export const GroupListContext = React.createContext<GroupListProps>({
    groupList: [],
    setGroupList: (list: GroupProps[]) => {},
})