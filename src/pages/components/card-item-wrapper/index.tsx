import React from 'react'
import './index.less'

/**
 * 卡片包装容器
 */

interface ListCardProps {
    children: React.ReactNode
    action?: React.ReactNode
}

const CardItem: React.FC<ListCardProps> = (props: ListCardProps) => {
    return (
        <main className="list-card-wrapper">
            <article className="list-card-content beauty-radius beauty-shadow">
                {props.children}

                {props.action && <span className="list-card-action">{props.action}</span>}
            </article>
        </main>
    )
}

export default CardItem
