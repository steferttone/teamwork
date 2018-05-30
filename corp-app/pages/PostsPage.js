/* global dl, dlVal */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import PostsList from 'containers/PostsListConnect'

const PAGE_TITLE = "Статьи"

// Component
class PostsPage extends Component {
    render() {

        const { destination } = this.props.params

        return (
            <div className="articlesPage">
                <Header />
                <section className="content">
                    <div className="container">
                        <div className="pageWrap">
                            <div className="page-articles">
                                <div className="page-title">
                                    <ul className="breadCrumbs">
                                        <li className="breadCrumbs-item">
                                            <a href="#" className="singleLink">Главная</a>
                                        </li>
                                        <li className="breadCrumbs-item">
                                            <span className="txt">Статьи</span>
                                        </li>
                                    </ul>
                                    <h2 className="capTwo">{ PAGE_TITLE }</h2>
                                </div>
                                
                                <PostsList/>

                                <div className="pagination pagination_right">
                                    <ul className="pag-list">
                                        <li className="pag-item">
                                            <a href="#" className="iconFont icon-i_arr-left singleLink"></a>
                                        </li>
                                        <li className="pag-item">
                                            <a href="#" className="singleLink">1</a>
                                        </li>
                                        <li className="pag-item">
                                            <span className="txt">...</span>
                                        </li>
                                        <li className="pag-item">
                                            <a href="#" className="singleLink active">5</a>
                                        </li>
                                        <li className="pag-item">
                                            <span className="txt">...</span>
                                        </li>
                                        <li className="pag-item">
                                            <a href="#" className="singleLink">21</a>
                                        </li>
                                        <li className="pag-item">
                                            <a href="#" className="iconFont  icon-i_arr-right singleLink"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default PostsPage
