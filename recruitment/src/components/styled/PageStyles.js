import styled , { css } from 'styled-components'

export const Container = styled.div`
    width: 85%;
    min-height: 85vh;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 65% 35%;

    .order {
        margin-top: 7.5%;
        background-color: white;
        height: 41%;
        padding: 5%;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
    }


    .order-div {
        padding-block: 15px;
        border-bottom: 1px solid #D9D9D9;
        font-weight: 700;

        p {
            font-size: small;
        }

        .total {
            font-size: 2rem;
        }
    }

    .total-div {
        border-bottom: none;
        padding-block: 0;
    }

    .order-div-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block: 8px;
    }

    @media only screen and (max-width: 600px) {
        display: block;
        
        .order {
            margin-bottom: 150px;
        }
    }
`
const SIZE = {
    short: css`
        width: 100%;
    `,
    long: css`
        width: 90%;
    `
}
export const StyledInput = styled.input`
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: #fff;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding-inline-start: 15px;
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 2px;
    color: #111;

    ${(props) =>  props.width && SIZE[props.width]}
`