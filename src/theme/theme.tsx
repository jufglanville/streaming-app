import React from "react";

import "./_fonts.css";
import "./_design-tokens.css";
import "./_reset.css";

export const Theme = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return <>{children}</>;
};
