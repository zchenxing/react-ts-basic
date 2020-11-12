import React from 'react'
import { Breadcrumb, Button, Row, Col } from 'antd'
import { useLanguage } from '@/language/useLanguage'
import { AweRouteProps } from '@/types/route'
import { Api } from '@/server/api'
import { Token } from '@/server/token'
import { errorMessage } from '@/server/error'
import { AnimalProps, GroupProps } from '@/types/common'
import axios from 'axios'
import { Utils } from '@/utils'
import ActiveAnimalCard from '@/pages/components/active-animal-card'
import { RouteUris } from '@/router/config'
import AwePage from '@/pages/components/awe-page'
import './index.less'

const GroupDetail: React.FC<AweRouteProps> = (routeProps: AweRouteProps) => {
    const { id, groupId } = routeProps.match.params

    const [group, setGroup] = React.useState<GroupProps | null>(null)
    const [dataSource, setDataSource] = React.useState<AnimalProps[]>([])

    React.useEffect(() => {
        fetchGroupData()
        fetchAnimalData()
    }, [])

    const fetchGroupData = async () => {
        try {
            const res = await axios.get(Api.group.detail(groupId), Token.data)
            setGroup(res.data)
            console.log(res.data)
        } catch (err) {
            errorMessage.alert(err)
        }
    }

    const fetchAnimalData = async () => {
        try {
            const res = await axios.get(Api.group.biological(groupId), Token.pageToken(999))
            setDataSource(res.data)
        } catch (err) {
            errorMessage.alert(err)
        }
    }

    /**
     * 编辑分组信息
     */
    const handleEditGroup = () => {
        routeProps.history.push(RouteUris.PastureGroupEdit(id, groupId))
    }

    const nav = (
        <Breadcrumb>
            <Breadcrumb.Item>{useLanguage.pasture_management}</Breadcrumb.Item>
            <Breadcrumb.Item>{useLanguage.group_management}</Breadcrumb.Item>
            <Breadcrumb.Item>{group ? group.room_name : ''}</Breadcrumb.Item>
        </Breadcrumb>
    )

    const info = (
        <div className="group-detail-info beauty-shadow">
            <label>{group ? group.room_name : ''}</label>
            <div>
                <span className="animal-tag">
                    {useLanguage.animal_count} {group ? group.total_biological : 0}
                </span>
            </div>
            <div className="group-detail-other">
                <span>
                    {useLanguage.updating_time}：
                    {group && Utils.utc2Time(group.updated_at, 'YYYY-MM-DD')}
                </span>

                <span>
                    {useLanguage.remark}：{group && group.description}
                </span>
            </div>

            <Button onClick={handleEditGroup}>{useLanguage.edit_group}</Button>
        </div>
    )

    return (
        <AwePage nav={nav} header={info}>
            <Row>
                {dataSource.map((animal: AnimalProps) => {
                    return (
                        <Col key={animal.id} sm={24} md={12} lg={8} xl={8} xxl={6}>
                            <ActiveAnimalCard data={animal} />
                        </Col>
                    )
                })}
            </Row>
        </AwePage>
    )
}

export default GroupDetail
