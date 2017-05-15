import React, { Component } from 'react'

import smoothscroll from 'smoothscroll'

const NEXT_BUTTON_TITLE = 'Дальше'

class NextButton extends Component {
    render() {
        const { buttonTitle } = this.props
        const btnTitle = !buttonTitle
            ? NEXT_BUTTON_TITLE
            : buttonTitle

        return (
            <div
                  className="showNext arrAnim"
                  onClick={
                      () => {
                          const pos = document
                              .querySelector('.showNext').parentElement
                              .offsetTop

                          smoothscroll(pos)
                      }
                  }
              >
                <span className="cap">
                    { btnTitle }
                </span>
                <button className="icon-arr-down"></button>
            </div>
        )
    }
}

export default NextButton
