import React from "react";

import {
  CtaButton,
  CtaButtonStyleProps,
  CTA_INTENT,
  CTA_SIZE,
  CTA_CARET,
} from "./CtaButton";

export default {
  title: "Elements/CtaButton",
  component: CtaButton,
  argTypes: {
    intent: {
      options: CTA_INTENT,
      control: "radio",
      table: {
        category: "Appearance",
      },
    },
    size: {
      options: CTA_SIZE,
      control: "radio",
      table: {
        category: "Appearance",
      },
    },
    caret: {
      options: [...CTA_CARET, null],
      control: "radio",
      table: {
        category: "Appearance",
      },
    },
    text: {
      name: "Text Content",
      control: {
        type: "text",
      },
      table: {
        category: "Content",
      },
    },
  },
};

type ButtonStoryProps = CtaButtonStyleProps & {
  text: string;
};

export const Default = (props: ButtonStoryProps): React.ReactNode => {
  const { text, intent, size, caret } = props;

  return (
    <div style={{ background: "black", padding: "3vmax" }}>
      <CtaButton intent={intent} size={size} caret={caret}>
        {text}
      </CtaButton>
    </div>
  );
};

Default.args = {
  text: "Click Me",
  intent: "primary",
  size: "base",
  caret: null,
};

Default.story = {
  parameters: {
    docs: {
      storyDescription:
        "A button component that can be styled with different intents and sizes.",
    },
    layout: "fullscreen",
  },
};
