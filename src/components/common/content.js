import React from "react";
import { Typography } from "antd"

const { Paragraph } = Typography;
/**
 *
 * @param {obj} props
 */
const ContentArea = (props) => {
    const { content } = props;
    return (
        <>
            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
                {content}
            </Paragraph>
        </>
    );
};
export default ContentArea