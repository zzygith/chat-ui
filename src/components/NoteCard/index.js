import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteCard, { NoteExcerpt, NoteImage, NotePublishTime, NoteTitle } from './style'
import note1 from '../../assests/images/note-1.jpg'

function NoteCard({note, ...rest }) {
    return (
        <StyledNoteCard {...rest} >
           <NoteImage src={note.image} />
           <NoteTitle>{note.title}</NoteTitle>
           <NoteExcerpt>{note.excerpt}</NoteExcerpt>
           <NotePublishTime>{note.publishedAt}</NotePublishTime>
        </StyledNoteCard>
    )
}

NoteCard.propTypes = {

}

export default NoteCard

