import { connect } from 'react-redux'

import { getContactsData } from 'actions/contactsActions'
import { redirectAction } from 'actions/locationActions'

// Component for connecting
import ContactsData from 'components/Blocks/ContactsData'

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetContacts: () => {
            dispatch(
                getContactsData()
            )
        },
        onRedirectContacts: (destination) => {
            dispatch(
                redirectAction('contacts', destination)
            )
        }
    }
}

const ContactsDataConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsData)

export default ContactsDataConnect
