import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteCard, { NoteExcerpt, NoteImage, NotePublishTime, NoteTitle } from './style'
import note1 from '../../assests/images/note-1.jpg'

function NoteCard({ ...rest }) {
    return (
        <StyledNoteCard {...rest} >
           <NoteImage src={note1} />
           <NoteTitle>Learning Note</NoteTitle>
           <NoteExcerpt>Hello everyone! This is my first note!</NoteExcerpt>
           <NotePublishTime>5-28-2021</NotePublishTime>
        </StyledNoteCard>
    )
}

NoteCard.propTypes = {

}

export default NoteCard

