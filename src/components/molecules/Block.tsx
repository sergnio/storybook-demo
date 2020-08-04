import * as React from 'react'
import Card from '@material-ui/core/Card/Card'
import Button from "../atoms/Button/Button";

type Props = {
    children?: any,
    className?: string,
    title: string,
    button?: string,
}

const Block = (props: Props) => (
    <Card style={{padding: "1em"}}>
        <h3>{props.title}</h3>
        {props.children}
        {props.button !== '' && <Button>{props.button}</Button>}
    </Card>
)

Block.defaultProps = {
    className: '',
    children: '',
    title: '',
    button: '',
}

export default Block