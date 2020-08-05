import * as React from 'react'
import Card from '@material-ui/core/Card/Card'
import Button from "../atoms/Button/Button";
import Subtitle from "../atoms/Subtitle";

type Props = {
    children?: any,
    className?: string,
    title: string,
    button?: string,
}

const Block = (props: Props) => (
    <Card style={{padding: "1em"}}>
        <Subtitle>{props.title}</Subtitle>
        <div style={{
            fontSize: "1.5em",
            color: "rgba(0,0,0,0.46)"
        }}>{props.children}</div>
        {props.button !== '' && <Button color="primary">{props.button}</Button>}
    </Card>
)

Block.defaultProps = {
    className: '',
    children: '',
    title: '',
    button: '',
}

export default Block