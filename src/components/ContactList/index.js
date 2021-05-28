import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'

function ContactList({ ...rest }) {
    return (
        <StyledContactList {...rest} >
            <FilterList options={['Latest First','Name First']} actionLabel="Add New Friends" >
                <Contacts>
                    {new Array(10).fill(0).map((_, i) => (<ContactCard key={i}/>))}
                </Contacts>
            </FilterList>
        </StyledContactList>
    )
}

ContactList.propTypes = {

}

export default ContactList

