import React from 'react'
import { Input } from 'antd'
import AwePage from '@/pages/components/awe-page'
import { useLanguage } from '@/language/useLanguage'
import { AweIcon, aweIconType } from '@/assets/iconfont'
import { PastureProps } from '@/types/common'
import './index.less'

const PastureMapOverview: React.FC = props => {
    return (
        <AwePage>
            <main className="pasture-map-wrapper">
                <div className="pasture-map__content">
                    <section>qqwd</section>
                </div>

                <aside className="pasture-map__list">
                    <AwePage
                        nav={
                            <div className="pasture-map__list--nav">
                                <label>{useLanguage.pasture_management}</label>
                                <Input prefix={<AweIcon type={aweIconType['icon-search2']} />} />
                            </div>
                        }
                    >
                        {[1, 2, 3].map(val => (
                            <PastureMapCard key={val} select={val === 2} />
                        ))}
                    </AwePage>
                </aside>
            </main>
        </AwePage>
    )
}

type PastureMapCardProps = {
    // pasture: PastureProps
    select: boolean
}

const PastureMapCard: React.FC<PastureMapCardProps> = (props: PastureMapCardProps) => {
    return (
        <div className="pasture-map-card beauty-radius" data-select={props.select}>
            <h4>牧场名字xxxx</h4>
            <main className="pasture-map-card__content">
                <article className="pasture-map-card__content--item">
                    {useLanguage.animal_basic} 123
                </article>
                <article className="pasture-map-card__content--item">
                    {useLanguage.type} 散圈养养牧场
                </article>
            </main>
        </div>
    )
}

export default PastureMapOverview