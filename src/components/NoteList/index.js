import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import { animated } from 'react-spring'
import noteData from '../../data/notes'

function NoteList({ ...rest }) {
    const trailAnimes = useStaggeredList(10);
    return (
        <StyledNoteList {...rest} >
            <FilterList options={["Latest First", "Modified First"]} actionLabel="Add New Notes" >
                <Notes>
                    {noteData.map((note, i) => (
                        <animated.div key={note.id} style={trailAnimes[i]}>
                            <NoteCard key={note.id} note={note} />
                        </animated.div>                   
                    ))}
                </Notes>
            </FilterList>
        </StyledNoteList>
    )
}

NoteList.propTypes = {

}

export default NoteList

