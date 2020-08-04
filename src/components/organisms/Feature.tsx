import * as React from 'react'

type Props = {
    children?: any,
    className?: string,
    image: string,
}

const Feature = (props: Props) => (
    <div
        style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "2em 15% 2em 50vw"
        }}
    >
        {props.children}
    </div>
)

Feature.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Feature