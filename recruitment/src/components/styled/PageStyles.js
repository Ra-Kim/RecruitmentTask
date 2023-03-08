import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    min-height: 85vh;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 65% 35%;

    .order {
        background-color: white;
        height: 50%;
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
`