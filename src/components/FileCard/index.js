import React from 'react'
import PropTypes from 'prop-types'
import StyledFileCard, { FileIcon, FileName, FileSize, Time } from './style'

import { ReactComponent as FileZip } from "../../assests/icons/fileZip.svg"
import { ReactComponent as FileExcel } from "../../assests/icons/fileExcel.svg";
import { ReactComponent as FileWord } from "../../assests/icons/fileWord.svg";
import { ReactComponent as FilePpt } from "../../assests/icons/filePpt.svg";
import { ReactComponent as FileImage } from "../../assests/icons/fileImage.svg";
import { ReactComponent as FilePdf } from "../../assests/icons/filePdf.svg";
import { ReactComponent as OptionsIcon } from "../../assests/icons/options.svg"; 


import Icon from "../Icon";

const fileIcons = {
    zip: FileZip,
    image: FileImage,
    pdf: FilePdf,
    word: FileWord,
    excel: FileExcel,
    ppt: FilePpt, 
  };

/* Process the received data like JSON. */
function FileCard({file, ...rest }) {
    return (
        <StyledFileCard {...rest} >
           <FileIcon icon={fileIcons[file.type]} />
           <FileName>{file.name}</FileName>
            <FileSize>{file.size}</FileSize>

            <Time>{file.updatedAt}</Time>
           
            <Time>May,03 2021</Time>


        </StyledFileCard>
    )
}

FileCard.propTypes = {

}

export default FileCard

