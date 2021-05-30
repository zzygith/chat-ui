import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contacts } from './style'
import FilterList from '../FilterList'
import ContactCard from '../ContactCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import {animated} from 'react-spring'

function ContactList({ ...rest }) {
    const trailAnimes=useStaggeredList(10)
    return (
        <StyledContactList {...rest} >
            <FilterList options={['Latest First','Name First']} actionLabel="Add New Friends" >
                <Contacts>
                    {new Array(10).fill(0).map((_, i) => (
                        <animated.div key={i} style={trailAnimes[i]} >
                            <ContactCard key={i} />
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

