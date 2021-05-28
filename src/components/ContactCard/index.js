import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Intro, Name } from './style'
import Avatar from '../Avatar'
import face4 from '../../assests/images/face-male-4.jpg'

function ContactCard({ ...rest }) {
    return (
        <StyledContactCard {...rest} >
            <Avatar src={face4} status="online" />
            <Name>sda</Name>
            <Intro>I am a front-end developer</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {

}

export default ContactCard

