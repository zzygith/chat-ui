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

function FileCard({ ...rest }) {
    return (
        <StyledFileCard {...rest} >
           <FileIcon icon={fileIcons.zip} />
           <FileName>Source Code.zip</FileName>
            <FileSize>1.5M</FileSize>
           
            <Time>May,03 2021</Time>


        </StyledFileCard>
    )
}

FileCard.propTypes = {

}

export default FileCard

