import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [msg, setMsg] = useState([]);

    const handleSignUp = () => {
        const newUser = {
            id: 1,
            username: 'a'
        };

        // 회원가입 요청 보내기
        axios.post('/api/signup', newUser)
            .then((response) => {
                console.log("회원가입 성공:", response.data);
                // 성공하면 메시지 갱신
                setMsg([...msg, '회원가입 성공!']);
            })
            .catch((error) => {
                console.error("회원가입 실패:", error);
                setMsg([...msg, '회원가입 실패']);
            });
    };


    useEffect(() => {
        axios.get('/api/test') // Axios로 GET 요청
            .then((response) => {
                setMsg(response.data); // Axios는 응답 데이터를 `response.data`에 포함
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
                </ul>
                <button onClick={handleSignUp}>회원가입</button>
            </header>
        </div>
    );
}

export default App;
