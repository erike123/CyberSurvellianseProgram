import React from "react";
import logoImg from '../../../assets/Logo.png';
import { Link } from "react-router-dom";
import Path from "../../../Paths";

export default function Logo() {
    return(
        <Link to={Path.Home}>
            <div className="w-14 flex items-center gap-2 hover:scale-105 hover:cursor-pointer">
                <img src={logoImg} alt="Magnifying glass on Ethereum" />
                <h1 className="text-white-clr font-bold text-md">CyberSurvelliance</h1>
                <h1 className="text-white-clr font-bold text-md">SolidGuard</h1>
            </div>
        </Link>
    );
}
