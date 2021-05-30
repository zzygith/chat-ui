import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import {animated} from 'react-spring'

function NoteList({ ...rest }) {
    const trailAnimes = useStaggeredList(10);
    return (
        <StyledNoteList {...rest} >
            <FilterList options={["Latest First", "Modified First"]} actionLabel="Add New Notes" >
                <Notes>
                    {new Array(10).fill(0).map((_, i) => (
                        <animated.div key={i} style={trailAnimes[i]}>
                            <NoteCard key={i} />
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

