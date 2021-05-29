import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'

function NoteList({ ...rest }) {
    return (
        <StyledNoteList {...rest} >
            <FilterList options={["Latest First", "Modified First"]} actionLabel="Add New Notes" >
                <Notes>
                    {new Array(10).fill(0).map((_, i) => (<NoteCard key={i}/>))}
                </Notes>
            </FilterList>
        </StyledNoteList>
    )
}

NoteList.propTypes = {

}

export default NoteList

