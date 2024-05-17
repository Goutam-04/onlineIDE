import React, { useEffect, useState } from 'react'
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { languageOptions } from "../constants/languageOptions";
import { snippet } from "../constants/snippet";
import { classnames } from "../utils/general";
import './codeEditor.css'
import { FaExpand, FaCompress, FaRegCopy, FaHome } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { defineTheme } from "../lib/defineTheme"
import LanguagesDropdown from './LanguageDropdown';
import ThemeDropdown from './ThemeDropdown';
import CustomInput from './CustomInput';
import OutputWindow from './OutputWindow';
import OutputDetails from './OutputDetails';
import useKeyPress from '../hooks/useKeyPress';
import DateDiff from 'date-diff';
import copy from 'copy-to-clipboard';
import StopWatch from './StopWatch';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero