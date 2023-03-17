import { ICDone, ICUnDone } from "pcg-commons";
import { TCardAction, useCardAction } from "../hooks";

export const CardAction = ({ card }: TCardAction) => {
  const { cardActionFragment, onCompleteToggle } = useCardAction({ card });

  if (cardActionFragment?.isCompleted)
    return (
      <ICUnDone className="text-cyan-800 w-5" onClick={onCompleteToggle} />
    );
  return <ICDone className="text-gray-300 w-5" onClick={onCompleteToggle} />;
};
