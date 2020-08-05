import React from 'react'
import Feature from "../organisms/Feature";
import Block from "../molecules/Block";
import Subtitle from "../atoms/Subtitle";

import '../templates/styles.css'

export default () =>
    <div
        // className={"default"}
    >
        <Feature
            // className={"hero"}
            image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
        >
            <Block title="Atom" button="Learn more">
                <p>
                    An atom is the smallest constituent unit of ordinary matter that has the properties of a
                    chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
                    atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
                    meter, in the short scale).
                </p>
            </Block>
        </Feature>

        <div style={{ display: "grid"}}>
            <div className={"col1"}>
                <Subtitle>Atoms in philosophy</Subtitle>
            </div>
            <div className={"col2"}>
                <p>
                    The idea that matter is made up of discrete units is a very old idea, appearing in many
                    ancient cultures such as Greece and India. The word &quot;atom&quot; was coined by ancient
                    Greek philosophers. However, these ideas were founded in philosophical and theological
                    reasoning rather than evidence and experimentation. As a result, their views on what atoms
                    look like and how they behave were incorrect. They also could not convince everybody, so
                    atomism was but one of a number of competing theories on the nature of matter. It was not
                    until the 19th century that the idea was embraced and refined by scientists, when the
                    blossoming science of chemistry produced discoveries that only the concept of atoms could
                    explain.
                </p>
            </div>
            <div className={"col1"}>
                <Subtitle>First evidence-based theory</Subtitle>
            </div>
            <div className={"col2"}>
                <p>
                    In the early 1800s, John Dalton used the concept of atoms to explain why elements always
                    react in ratios of small whole numbers (the law of multiple proportions). For instance,
                    there are two types of tin oxide: one is 88.1% tin and 11.9% oxygen and the other is 78.7%
                    tin and 21.3% oxygen (tin(II) oxide and tin dioxide respectively). This means that 100g of
                    tin will combine either with 13.5g or 27g of oxygen. 13.5 and 27 form a ratio of 1:2, a
                    ratio of small whole numbers. This common pattern in chemistry suggested to Dalton that
                    elements react in whole number multiples of discrete units—in other words, atoms. In the
                    case of tin oxides, one tin atom will combine with either one or two oxygen atoms.[1]
                </p>
            </div>
        </div>
    </div>
