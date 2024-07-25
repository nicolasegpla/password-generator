import ButtonSave from "./index";

export default {
    title: 'Components/atoms/ButtonSave',
    component: ButtonSave,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            name: 'sizeButton',
            options: {
                sm: 'w-32 h-10 text-sm',
                md: 'w-36 h-11 text-md',
                lg: 'w-40 h-12 text-lg'
            },
            control: {
                type: 'radio'
            }
        }
    }
}

export const Primary = {
    args: {
        size: 'w-32 h-10 text-sm'
    }
    
}