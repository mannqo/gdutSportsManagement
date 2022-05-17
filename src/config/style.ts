import styled from 'styled-components';

export const ImageWrapper = styled.div` 
    display: flex;
    flex-wrap: nowrap;  
    justify-content: center;
    .image {  
        .ant-upload.ant-upload-select-picture-card { 
            width: 160px;
            height: 160px;
        } 
    }
`