import { TagComponent } from '@commons/tag/tag.component';
import {
  Meta,
  StoryFn,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

export default {
  title: 'Design/Tag',
  component: TagComponent,
  decorators: [
    moduleMetadata({}),
    componentWrapperDecorator(
      (story) =>
        `<div style="margin-block: 3em; display: grid; place-content: center">${story}</div>`
    ),
  ],
  argTypes: {
    status: {
      options: [
        'primary',
        'primaryLight',
        'secondary',
        'secondaryLight',
        'success',
        'successLight',
        'danger',
        'dangerLight',
        'warning',
        'warningLight',
        'info',
        'infoLight',
        'dark',
        'darkLight',
        'light',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const tagArgs = {
  text: 'Tag',
  status: 'primary',
};

const TagTemplate: StoryFn<TagComponent> = (args) => ({
  props: args,
});

export const Tag = TagTemplate.bind({});
Tag.args = tagArgs;
