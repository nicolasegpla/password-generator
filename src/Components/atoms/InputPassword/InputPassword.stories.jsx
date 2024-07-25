import InputPassword from "./index";

export default {
    title: 'Components/atoms/InputPassword',
    component: InputPassword,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            name: 'inputSize',
            options: {sm:'w-72 h-11', md:'w-80 h-12', lg:'w-96 h-14'},
            control: {
                type: 'radio'
            }
        }
    }
}



export const Primary = {
    args: {
        size: 'w-72 h-11',
    }
}
