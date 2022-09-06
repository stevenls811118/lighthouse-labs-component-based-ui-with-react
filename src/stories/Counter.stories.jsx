import Counter from '../components/Counter';

export default {
    title: 'Counter',
    component: Counter
};

const Template = args => <Counter {...args} />;

export const WithHeading = Template.bind({});
WithHeading.args = {heading: 'Example Heading'};

export const WithoutHeading = Template.bind({});
WithoutHeading.args = {};

// import { storiesOf } from '@storybook/react';

// // A string: what is this story about?
// storiesOf('Counter')
//     .add('With Heading', () => {
//         return <Counter heading="Example Heading" />;
//     })
//     .add('Without Heading', () => {
//         return <Counter />;
//     });



