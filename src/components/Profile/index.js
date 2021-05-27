import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, {ContactSection, AlbumSection, AlbumTitle, Album, Photo, CloseIcon} from './style'
import Avatar from '../Avatar'
import Paragraph from '../Paragraph'
import Seperator from '../Seperator'
import face from '../../assests/images/face-male-3.jpg'
import Text from '../Text'
import photo1 from '../../assests/images/photo1.jpg'
import photo2 from '../../assests/images/photo2.jpg'
import photo3 from '../../assests/images/photo3.jpg'
import {ReactComponent as Cross} from '../../assests/icons/cross.svg'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Profile({showEditBtn, showCloseIcon=true, onEdit, status,  ...rest }) {
    return (
        <StyledProfile {...rest} >
            {showCloseIcon && <CloseIcon icon={Cross}/>}
            <Avatar style={{ margin: "26px 0" , gridArea:"1/1/2/2"}} src={face} size="110px" status={status} StatusIconSize="25px" />
            {showEditBtn && <Button size="52px" onclick={onEdit} style={{gridArea:"1/1/3/2", alignSelf:"end", marginLeft:"100px", zIndex:"10"}}><FontAwesomeIcon style={{fontSize: "24px"}} icon={faPen} /></Button>}
            <Paragraph style={{ marginBottom: "12px" }} size="xlarge">Donald Johnson</Paragraph>
            <Paragraph style={{marginBottom:"18px"}} size="medium" type="secondary">Paris, France</Paragraph>
            <Paragraph style={{ marginBottom: "26px" }}>Help people to build websites and apps + grow awareness in social media</Paragraph>
            <Seperator style={{ margin: "20px" }} />
            <ContactSection>
                <Description label="Phone"> +(331) 45550110</Description>
                <Description label="E-mail"> info@uxdesigner.im</Description>
                <Description label="DOB"> 14.05.1992</Description>
            </ContactSection>
            <Seperator style={{ margin: "20px" }} />
            <AlbumSection>
                <AlbumTitle>
                    <Text type="secondary">Media(31)</Text>
                    <a href="#">See all</a>
                </AlbumTitle>
                <Album>
                    <Photo src={photo1} alt="" />
                    <Photo src={photo2} alt="" />
                    <Photo src={photo3} alt="" />
                </Album>
            </AlbumSection>
        </StyledProfile>
    )
}

function Description({label, children }) {
    return (
        <Paragraph>
            <Text type="secondary">{label}:</Text>
            <Text>{children}</Text>
        </Paragraph>

    )
}

Profile.propTypes = {

}

export default Profile

