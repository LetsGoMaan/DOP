import React from 'react';
import {PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

type PagePropsType = {
    pages: Array<PagesType>
}


export const Page = (props: PagePropsType) => {
    const params = useParams()
    console.log(Number(params.id))
    return (
        <div>
            <Content page = {props.pages[Number(params.id)]}/>
        </div>
    );
};

