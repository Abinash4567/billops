import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import Code from "./code";

const Syntax = () => {
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        fetch("/markdown/article.md")
            .then((response) => response.text())
            .then((response) => setPostContent(response))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Markdown options={{
            overrides: {
                Code: {
                    component: Code
                }
            }
        }}>
            {postContent}
        </Markdown>
    )
}

export default Syntax;