import React from 'react'
import PropTypes from 'prop-types'
import StyledFileList, {Files} from './style'
import FilterList from '../FilterList'
import FileCard from '../FileCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import { animated } from 'react-spring'
import fileData from '../../data/files'

function FileList({ ...rest }) {
    const trailAnimes = useStaggeredList(10);
    return (
        <StyledFileList {...rest} >
           <FilterList options={["Latest First", "Name First"]} >
                <Files>
                    {fileData.map((file, i) => (
                        <animated.div key={file.id} style={trailAnimes[i]}>
                            <FileCard key={file.id} file={file} />
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

