import React from "react";
import ListItem from "../ui/ListItem";

function Contact(props){
    return (
        <div>
            <h2>Contact Me...</h2>
            <ul>
                <ListItem content="878 925 1297" />
                <ListItem content="rapurbo123@gmail.com" />
            </ul>
        </div>
    );
}

export default Contact;