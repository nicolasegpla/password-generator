import FormNewPassword from "./index";

export default {
    title: 'Components/molecules/FormNewPassword',
    component: FormNewPassword,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',

    },
    decorators: [
        (Story) => (
            <div style={{backgroundColor: 'black'}}>
                <Story />
            </div>
        )
    ],
}

export const Primary = {

}