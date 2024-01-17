import { Meta, StoryObj } from "@storybook/react"

import Header, { props } from "../components/common/header"

const meta: Meta<typeof Header> = {
    title: "common/header",
    component: Header,
    args: {
        title: "Next.js",
    },
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: { inline: true }, // render the story in an iframe
            canvas: { sourceState: "shown" }, // start with the source open
        },
    },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
    args: {
        title: "Next.js",
    },
    render: (arg: props) => {
        return <Header title="Next.js" />
    },
}

/**
 * 通常の使い方です
 */
export const Basic: Story = {
    args: {
        title: "Next.js",
    },
    render: (arg) => {
        return <Header title="Next.js" />
    },
}
