import { useState } from "react"
function Header({ title }) {
    return <h1> {title ? title : 'default title'} </h1>;
}

export default function Homepage() {

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes+1);
    }

    const names = ['Jenny', 'Abigail', 'Ainsley', 'Emma'];
    return (
        <div>
            <Header title="React <3" />
            <ul>
                {names.map((names) => (
                    <li key={names}>{names}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    )
}