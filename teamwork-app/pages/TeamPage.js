/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react'

import ParallaxComponent from 'components/Blocks/ParallaxComponent'
import ContactsModal from 'components/Blocks/ContactsModal'

import CommonHeader from 'components/Headers/CommonHeader'
import PlacesBlock from 'containers/PlacesConnect'
import CommonFooter from 'components/Footers/CommonFooter'
import TeamGallery from 'containers/TeamGalleryConnect'
import ProposalComponent from 'containers/ProposalConnect'

const GRAND_TITLE = 'От идеи к воплощению'
const GRAND_DESCRIPTION = 'Дизайн-студия TEAMWORK предлагает эффективные решения для вашего бизнеса. Наша команда реализует проекты любой сложности, от разработки фирменного стиля и дизайна полиграфических материалов, до создания и продвижения сайта.'

const teamData = {
    title: 'Команда',
    description: 'Для каждого проекта создается рабочая группа, состоящая из: дизайнеров, маркетологов, иллюстраторов, seo-специалистов, копирайтеров, специалистов по диджитал-маркетингу, тестеровщиков и верстальщиков.',
    postDescription: 'Мы с удовольствием возьмемся за любую задачу и предложим клиенту доступную цену на весь комплекс услуг. Если вы готовы заказать продвижение сайта, графический дизайн или создание веб-ресурса с нуля — ждем ваших заявок.',
}

const ORDER_TITLE = 'Сдеалать заказ'

// Component
class TeamPage extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
        }
    }
    render() {
        const { showModal } = this.state

        document.body.className = showModal ? 'showingModal' : ''

        return (
            <ParallaxComponent>
                <section className="wrapper">
                    <CommonHeader/>
                    <section className="innerFirst">
                        <div className="container">
                            <h1 className="gradText">{ GRAND_TITLE }</h1>
                            <div className="data">
                                <p>{ GRAND_DESCRIPTION }</p>
                            </div>
                        </div>
                    </section>
                    <ProposalComponent/>
                    <TeamGallery
                        teamTitle={ teamData.title }
                        teamDescription={ teamData.description }
                    />
                    <section className="dopDataCallBack">
                        <div className="container">
                            <div className="singleColText centerBl center">
                                <div className="col4 col6-sd col10-md col12-sm">
                                    <p>{ teamData.postDescription }</p>
                                </div>
                            </div>
                            <button
                                className="hGradBtn icon-arr-right"
                                onClick={
                                    () => {
                                        this.setState({
                                            showModal: !showModal,
                                        })
                                    }
                                }
                            >
                                { ORDER_TITLE }
                            </button>
                            <ContactsModal
                                showingState={ showModal }
                                onShowModal={
                                    this.setState.bind(this, {
                                        showModal: !showModal,
                                    })
                                }
                            />
                        </div>
                    </section>
                    <PlacesBlock/>
                    <CommonFooter/>
                </section>
            </ParallaxComponent>
        )
    }
}

export default TeamPage
