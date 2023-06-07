import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";

interface SidebarProps{
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const onToggle = () =>{
        setCollapsed(perv => !perv)
    }

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]:collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        </div>
    );
};








