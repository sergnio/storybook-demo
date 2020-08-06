import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, select} from "@storybook/addon-knobs";
import Button from "./Button";

export default {
    title: "Atoms/Button",
    // 3
    decorators: [withKnobs]
};

// 1
export function simpleButton() {
    return (
        <Button>Simple Button!</Button>
    );
}

export function withColor() {
    return <Button color="primary">Learn more</Button>
}

// 3
export const clickHandler = () =>
    <Button color="primary"
        onClick={action('Clicked!')}
    >
        Please click me
    </Button>

// 4
const label = 'Colors';
const options = {
    Red: 'red',
    Blue: 'blue',
    Pink: 'pink',
};
const defaultValue = 'red';

export const usingKnobs = () =>
    <Button
        background={select(label, options, defaultValue)}
    >
        {
            text("Button Label", "Hello Storybook!")
        }
    </Button>

