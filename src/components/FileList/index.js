import React from 'react'
import PropTypes from 'prop-types'
import StyledFileList, {Files} from './style'
import FilterList from '../FilterList'
import FileCard from '../FileCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import {animated}  from 'react-spring'

function FileList({ ...rest }) {
    const trailAnimes = useStaggeredList(10);
    return (
        <StyledFileList {...rest} >
           <FilterList options={["Latest First", "Name First"]} >
                <Files>
                    {new Array(10).fill(0).map((_, i) => (
                        <animated.div key={i} style={trailAnimes[i]}>
                            <FileCard key={i} />
                        </animated.div>
                       
                    
                    )
                )}
                </Files>
            </FilterList>
        </StyledFileList>
    )
}

FileList.propTypes = {

}

export default FileList

