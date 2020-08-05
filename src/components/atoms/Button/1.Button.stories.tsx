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
export const withProps = () => (
    <Button>Simple Button!</Button>
);

// 2
export const defaultButton = () =>
    <Button
        onClick={action('Clicked!')}
    >
        Learn more
    </Button>

// 3
const label = 'Colors';
const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Orange: 'orange',
    Pink: 'pink',
    None: null,
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
