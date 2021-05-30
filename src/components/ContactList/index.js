import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import {animated} from 'react-spring'
import contactsData from '../../data/contacts'

function ContactList({ ...rest }) {
    const trailAnimes=useStaggeredList(10)
    return (
        <StyledContactList {...rest} >
            <FilterList options={['Latest First','Name First']} actionLabel="Add New Friends" >
                <Contacts>
                    {contactsData.map((contact, i) => (
                        <animated.div key={contact.id} style={trailAnimes[i]} >
                            <ContactCard key={contact.id} contact={contact} />
                        </animated.div>
                    ))}
                </Contacts>
            </FilterList>
        </StyledContactList>
    )
}

ContactList.propTypes = {

}

export default ContactList

