import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './index.scss';

const DropdownMenu = (props) => {
    const {children, items} = props;
    return (
        <Tippy
            placement='right-end'
            arrow={false}
            offset={[0,1]}
            content={

            }
            ref={ref}
            trigger={}
        >
            {children}
        </Tippy>
    )
}

export default DropdownMenu;