import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, select} from "@storybook/addon-knobs";
import Button from "./Button";

export default {
    title: "Atoms/Button",
    decorators: [withKnobs]
};

export const withProps = () => (
    <Button>Simple Button!</Button>
);

export const defaultButton = () => <Button onClick={action('clicked')}>Learn more</Button>
// 'text' | 'outlined' | 'contained'
const label = 'Colors';
const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    None: null,
};
const defaultValue = 'red';

export const usingKnobs = () =>
<Button color={select(label, options, defaultValue)}>{text("Button Label", "Hello Storybook!")}</Button>


// .add('default - small', () => (
//     <Button size={ButtonSize.SMALL} onClick={action('clicked')}>
//         Learn more
//     </Button>
// ))
// .add('default - medium', () => (
//     <Button size={ButtonSize.MEDIUM} onClick={action('clicked')}>
//         Learn more
//     </Button>
// ))
// .add('default - large', () => (
//     <Button size={ButtonSize.LARGE} onClick={action('clicked')}>
//         Learn more
//     </Button>
// ))
// .add('rounded', () => (
//     <Button theme={ButtonTheme.ROUNDED} onClick={action('clicked')}>
//         Learn more
//     </Button>
// ))
// .add('disabled', () => (
//     <Button theme={ButtonTheme.ROUNDED} disabled onClick={action('clicked')}>
//         Learn more
//     </Button>
// ))
