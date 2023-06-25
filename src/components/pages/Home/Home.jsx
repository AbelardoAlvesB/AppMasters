import React, { useEffect, useState } from "react";
import "../Home/styles.scss";
import Header from "../../Header/Header";
import Card from "../../Card/Card.jsx";
import axios from "axios";

function Home() {
  const [replyData, setReplyData] = useState([]);
  const [searchStorage, setSearchStorage] = useState("");
  const [categoryNotFound, setCategoryNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const Api = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

      try {
        const response = await axios.get(Api, {
          headers: {
            "Content-Type": "application/json",
            "dev-email-address": "abelardoalves510@gmail.com",
          },
        });

        setReplyData(response.data);
        localStorage.setItem("apiData", JSON.stringify(response.data));

        const genres = response.data.map((value) => value.genre);
        localStorage.setItem("genres", JSON.stringify(genres));
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    const storedData = localStorage.getItem("apiData");
    const storedGenres = localStorage.getItem("genres");

    if (storedData && storedGenres) {
      setReplyData(JSON.parse(storedData));
      setSearchStorage(JSON.parse(storedGenres));
    } else {
      fetchData();
    }
  }, []);

  const filterData = (search) => {
    if (search && search !== "") {
      const filteredData = replyData.filter((value) =>
        value.genre.toLowerCase().includes(search.toLowerCase())
      );
      setReplyData(filteredData);
      setCategoryNotFound(filteredData.length === 0);
    } else {
      const storedData = localStorage.getItem("apiData");
      if (storedData) {
        setReplyData(JSON.parse(storedData));
        setCategoryNotFound(false);
      }
    }
  };

  const handleChange = () => {
    const search = localStorage.getItem("search");
    setSearchStorage(search);
    filterData(search);
  };

  return (
    <>
      <Header handleChange={handleChange} />
      <div className="container">
        <div className="space-cards">
          {categoryNotFound ? (
            <p className="category">Categoria não encontrada!</p>
          ) : (
            replyData.map((value, id) => (
              <Card
                key={id}
                id={id}
                image={value.thumbnail}
                name={value.title}
                description={value.short_description}
                release={value.release_date}
                plataform={value.platform}
                genero={value.genre}
                button={value.game_url}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
