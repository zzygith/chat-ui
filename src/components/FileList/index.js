import React from 'react'
import PropTypes from 'prop-types'
import StyledFileList, {Files} from './style'
import FilterList from '../FilterList'
import FileCard from '../FileCard'

function FileList({ ...rest }) {
    return (
        <StyledFileList {...rest} >
           <FilterList options={["Latest First", "Name First"]} >
            <Files>
                {new Array(10).fill(0).map((_, i)=>(
                    <FileCard key={i}/>)
                )}
                </Files>
                </FilterList>
        </StyledFileList>
    )
}

FileList.propTypes = {

}

export default FileList

