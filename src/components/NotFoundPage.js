import React from "react";
import { Link } from "react-router-dom";
import InstagramEmbed from "react-instagram-embed";

const NotFoundPage = () => (
    <div className="notfound">
        404 - You can watch my last hiking video, otherwise{" "}
        <Link to="/pokedex">go home!</Link>
        <InstagramEmbed
            url="https://www.instagram.com/p/CAnsksUn64e/"
            maxWidth={500}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    </div>
);

export default NotFoundPage;
