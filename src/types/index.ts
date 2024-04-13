export type TComponentProps = {
  /**
   * Data test id for automated tests.
   */
  dataTestId?: string;

  /**
   * Class name for custom styles.
   */
  className?: string;

  /**
   * React content
   */
  children?: React.ReactNode;
};

export type TPolymorphicComponentProps = TComponentProps & {
  /**
   * Render as an empty slot, and merge styles and attributes to its immediate child.
   */
  asChild?: boolean;
};
