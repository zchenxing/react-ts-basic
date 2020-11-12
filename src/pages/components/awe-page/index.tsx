import React from 'react'
import './index.less'

interface AwePageProps {
    bgColor?: boolean
    hdColor?: boolean // header是否显示白色
    ctColor?: boolean // content是否显示白色
    ftColor?: boolean // footer是否显示白色
    noPadding?: boolean // wrapper是否带padding
    isHPadding?: boolean // header是否有padding
    isHShadow?: boolean // header是否带阴影
    isFBorder?: boolean // footer顶部线条
    nav?: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
    children: React.ReactNode
}

const AwePage: React.FC<AwePageProps> = (props: AwePageProps) => {
    return (
        <div className="awe-page-wrapper" data-padding={props.noPadding}>
            <nav className="awe-page__nav">{props.nav}</nav>
            <main
                className="awe-page__main"
                style={{ backgroundColor: props.bgColor ? '#fff' : 'f' }}
            >
                {props.header && (
                    <header
                        data-shadow={props.isHShadow}
                        data-padding={props.isHPadding}
                        className="awe-page__main-header"
                        style={{ backgroundColor: props.hdColor ? '#fff' : '' }}
                    >
                        {props.header}
                    </header>
                )}

                <section
                    className="awe-page__main-content"
                    style={{ backgroundColor: props.ctColor ? '#fff' : '' }}
                >
                    {props.children}
                </section>

                {props.footer && (
                    <footer
                        data-border={props.isFBorder}
                        className="awe-page__main-footer"
                        style={{ backgroundColor: props.ftColor ? '#fff' : '' }}
                    >
                        {props.footer}
                    </footer>
                )}
            </main>
        </div>
    )
}

export default AwePage
