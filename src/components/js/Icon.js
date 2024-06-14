import React from 'react';
import { FaHeart, FaRegHeart, FaSpinner } from 'react-icons/fa';

export const HeartIcon = ({ liked }) => {
    return liked ? <FaHeart /> : <FaRegHeart />;
};

export const SpinnerIcon = () => {
    return <FaSpinner className="spinner" />;
};
