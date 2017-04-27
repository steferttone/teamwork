/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

class PortfolioItemTitle extends Component {
    render() {
        return(
            <section class="projectFirst">
                <div class="container">
                    <div class="table">
                        <div class="tCell middle">
                            <h2>Графический дизайн</h2>
                            <h1>Логотип для Milangel</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
