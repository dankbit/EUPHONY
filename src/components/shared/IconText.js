import {Icon} from "@iconify/react";
const IconText = ({iconname, displaytext, active}) =>
{
    return (
        <div className="flex items-center justify-start cursor-pointer">
                <div className="px-6 py-3">
                    <Icon icon = {iconname} color= {active ? "red" : "gray"} fontSize={35} />
                </div>

                    <div className={`${active ? "text-white" : "text-gray-400"}
                    text-lg font-semibold hover:text-white`}>
                        {displaytext}
                    </div>
 
        </div>

    );
};

export default IconText;