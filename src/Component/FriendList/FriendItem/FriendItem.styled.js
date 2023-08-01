import styled from '@emotion/styled'


export const FriItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.2) 0px 4px 6px;
`;


export const Status = styled.span`
    display: flex;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 8px;
    background-color:  ${({ isOnline }) => (isOnline ? '#009908' : '#d60505')};
`;