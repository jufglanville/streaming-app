import React from "react";
import cx from "classnames";
import { TComponentProps } from "@/types";

import styles from "./CtaButton.module.css";

export const CTA_INTENT = ["primary", "secondary", "tertiary"] as const;
export const CTA_SIZE = ["sm", "base", "lg"] as const;
export const CTA_CARET = ["play", "info"] as const;

export type CtaButtonStyleProps = {
  intent?: (typeof CTA_INTENT)[number];
  size?: (typeof CTA_SIZE)[number];
  caret?: (typeof CTA_CARET)[number];
};

export type CtaButtonProps = React.ComponentPropsWithRef<"button"> &
  TComponentProps &
  CtaButtonStyleProps;

export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (props, ref) => {
    const {
      intent = "primary",
      size = "base",
      caret,
      onClick,
      children,
      className,
      dataTestId,
    } = props;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        onClick={onClickHandler}
        data-testid={dataTestId}
        className={cx(styles.btn, className, {
          [styles[`btn_${intent}`]]: true,
          [styles[`btn_${size}`]]: true,
        })}
      >
        <span
          className={cx({
            [styles[`btn_${caret}`]]: true,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
);
