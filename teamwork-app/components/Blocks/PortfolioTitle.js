/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

const data = {
    title: 'Наши проекты',
    description: 'Дизайн-студия TEAMWORK предлагает эффективные решения для вашего бизнеса. Наша команда реализует проекты любой сложности, от разработки фирменного стиля и дизайна полиграфических материалов, до создания и продвижения сайта.',
}

class PortfolioTitle extends Component {
    render() {
        return (
            <section className="innerFirst">
                <div className="container">
                    <h1 className="gradText">{ data.title }</h1>
                    <div className="data">
                        <p>{ data.description }</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default PortfolioTitle
