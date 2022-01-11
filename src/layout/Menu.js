import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DashboardMenuItem, MenuItemLink,} from 'react-admin';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {SvgIcon} from "@material-ui/core";

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { RiMedicineBottleFill, RiFolderChartFill,RiAdminFill } from "react-icons/ri";
import { MdInventory,MdCoronavirus } from "react-icons/md";
import { FaClinicMedical,FaUserMd,FaChartBar,FaSitemap } from "react-icons/fa";

import SubMenu from './SubMenu';


const Menu = ({ dense = false } ) => {
    const [state, setState] = useState({
        menuAgency:true,
        menuClinic:true,
        menuVaccine:true,
        menuRecipient:true,
        menuSurvey:true
    });

    const open = useSelector((state) => state.admin.ui.sidebarOpen);

    const classes = useStyles();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div
            className={classnames(classes.root, {
                [classes.open]: open,
                [classes.closed]: !open,
            })}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuAgency')}
                isOpen={state.menuAgency}
                name="My Agency"
                icon={<SvgIcon component={FaSitemap} viewBox="0 0 600 476.6"/>} //TODO : put icon in straight layout
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/govtagency/admins',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Agency's Admin"
                    leftIcon={<SvgIcon component={RiAdminFill}/>}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuClinic')}
                isOpen={state.menuClinic}
                name="Clinic"
                icon={<SvgIcon component={FaClinicMedical} viewBox="0 0 600 476.6"/>} //TODO : put icon in straight layout
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/clinic/admins',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Clinic's Admin"
                    leftIcon={<SvgIcon component={FaUserMd} viewBox="0 0 550 446.6"/>}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/clinic',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Clinic"
                    leftIcon={<SvgIcon component={AssignmentIcon}/>}
                    dense={dense}
                />

            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuVaccine')}
                isOpen={state.menuVaccine}
                name="Vaccine"
                icon={<SvgIcon component={LocalHospitalIcon}/>}
                dense={dense}
            >

                <MenuItemLink
                    to={{
                        pathname: '/diseases',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Diseases"
                    leftIcon={<SvgIcon component={MdCoronavirus}/>}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/vaccines',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Vaccine Info"
                    leftIcon={<SvgIcon component={RiMedicineBottleFill}/>}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/vaccines/orders',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Orders"
                    leftIcon={<SvgIcon component={MdInventory}/>}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuSurvey')}
                isOpen={state.menuSurvey}
                name="Survey"
                icon={<SvgIcon component={RiFolderChartFill}/>}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/survey/questions',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Questions"
                    leftIcon={<SvgIcon component={FaChartBar} viewBox="0 0 500 446.6"/>}
                    dense={dense}
                />

            </SubMenu>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    open: {
        width: 200,
    },
    closed: {
        width: 55,
    },
}));

export default Menu;