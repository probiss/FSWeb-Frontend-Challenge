import React from "react";
import styled from "styled-components"

export default function Footer() {
    const Start1 = styled.div`
        background-color: #F9F9F9;
        padding-left: 125px;
        padding-right: 175px;
        
    `

    const Start2 = styled.p`
        padding-top: 85px;
        color: #1F2937;
        width: 540px;
        font-weight: 600;
        font-size: 42px;
        line-height: 125%;
    `
    const Start3 = styled.div`
        padding-top: 62px;
        display: flex;
        justify-content: space-between;
        padding-bottom:  135px;
    `

    return (
        <Start1>
            <div>
                <Start2>
                    <p>Let's work together on <br />your next product.</p>
                </Start2>

                <div>
                    <Start3>
                        <div className="flex items-center gap-1">  
                                <div>👉</div>
                                <a href="" className="text-red-800 text-lg tracking-wider font-bold" > bulut.cihad@gmail.com </a>
                        </div>
                        <div className="flex gap-5">
                            <a href="" className="text-black no-underline text-lg tracking-wider font-semibold" > Personel Blog </a>
                            <a href="" className="text-green-500 no-underline text-lg tracking-wider font-semibold" > Github </a>
                            <a href="" className="text-sky-500 no-underline text-lg tracking-wider font-semibold" > Linkedin </a>
                        </div>
                    </Start3>
                </div>
            </div>
        </Start1>
    )
}