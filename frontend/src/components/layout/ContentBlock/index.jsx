import LeftContentBlock from "./LeftBlock";
import RightContentBlock from "./RightBlock";

const ContentBlock = (props) => {
    if (props.type === "left") return <LeftContentBlock { ...props } />;
    if (props.type === "right") return <RightContentBlock { ...props } />;
    return null;
};

export default ContentBlock;
