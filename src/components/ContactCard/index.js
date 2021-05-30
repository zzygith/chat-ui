import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Intro, Name } from './style'
import Avatar from '../Avatar'
import face4 from '../../assests/images/face-male-4.jpg'

function ContactCard({contact, ...rest }) {
    return (
        <StyledContactCard {...rest} >
            <Avatar src={contact.avatar} status={contact.status} />
            <Name>{contact.name}</Name>
            <Intro>{contact.intro}</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {

}

export default ContactCard

