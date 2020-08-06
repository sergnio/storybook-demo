import React from "react";
import Button from "./Button";
import {action} from "@storybook/addon-actions";
import {select, text, withKnobs} from "@storybook/addon-knobs";

export default {
    title: "Atoms/Button",
    decorators: [withKnobs]
}


// Simple Button
export function simpleButton() {
    return (
        <Button>Simple Button</Button>
    )
}

// Button with Color
export function withColor() {
    return <Button color="primary">Learn more</Button>
}

// Button w/ click handler
export const clickHandler = () =>
    <Button
        color="primary"
        onClick={action('Clicked!')}
    >Click!</Button>

// Button with color knob
const label = 'Colors';
const options = {
    Red: 'red',
    Blue: 'blue',
    Pink: 'pink',
    Orange: 'orange',
    Black: 'black',
    White: 'white'
};
const defaultValue = 'red';

export const usingKnobs = () =>
    <Button
        background={select(label, options, defaultValue)}
    >
        {/* Button with text knob */}
        { text("button label", "hello!")}
    </Button>
