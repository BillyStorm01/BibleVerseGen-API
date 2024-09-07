import React, { useEffect, useState } from "react";
import "../../styles/verseBox.css"
import "../../styles/verseBtn.css"

const VerseBox = () => {
    const [verse, setVerse] = useState({
        text: "",
        reference: "",
        version: ""
    });
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        fetchVerse()
    }, [])

    const fetchVerse = () => {
        fetch("https://beta.ourmanna.com/api/v1/get?format=json&order=random")
            .then(response => response.json())
            .then(data => {
                // Assuming data.verse.details contains text, reference, and version
                const verseText = data.verse.details.text;
                const verseReference = data.verse.details.reference; // Adjust according to actual API response
                const verseVersion = data.verse.details.version; // Adjust according to actual API response

                setVerse({
                    text: verseText,
                    reference: verseReference,
                    version: verseVersion
                });
            })
            .catch(error => {
                console.error("Error fetching the verse:", error);
            });
    };

    return (
        <div>
            <div className="container">
                <div><p>{verse.text}</p></div>
                <div><p>{verse.reference}</p></div>
                <div><p>{verse.version}</p></div>
            </div>
            <div className="btn-container">
                <button onClick={fetchVerse}>Get Verse</button>
            </div>
        </div>
    );
}

export default VerseBox;

