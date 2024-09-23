import React, { useState, useEffect } from 'react';

const games = [
    {
        title: "Plane",
        description: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    },
    {
        title: "Quad Copter",
        description: "The Witcher 3: Wild Hunt is an action role-playing game developed by CD Projekt Red. It's the third main entry in The Witcher video game series, based on the book series by Polish author Andrzej Sapkowski.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    },
    {
        title: "CV on raspberry pi",
        description: "Red Dead Redemption 2 is an action-adventure game developed by Rockstar Games. Set in 1899, it follows the story of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    },
    {
        title: "Garbage Detection on raspberry pi",
        description: "PUBG Mobile is a free-to-play battle royale video game developed by LightSpeed & Quantum Studio, a division of Tencent Games. It's an adaptation of PLAYERUNKNOWN'S BATTLEGROUNDS for mobile devices.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
    },
    {
        title: "Smart Caching on ESP devices",
        description: "Fortnite is a free-to-play battle royale game developed by Epic Games. Up to 100 players fight to be the last person standing in player-versus-player combat.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
    },
    {
        title: "Auto balancing Robot",
        description: "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft Montreal and Ubisoft Toronto. It's set in Hope County, a fictional region of Montana, USA.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
    },
];

const GameCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 1) % games.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const visibleGames = [
        games[startIndex],
        games[(startIndex + 1) % games.length],
        games[(startIndex + 2) % games.length]
    ];

    return (
        <div className="w-full max-w-full mx-auto p-8">
            <div className="flex space-x-8">
                {visibleGames.map((game, index) => (
                    <div key={index} className="w-1/3 bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
                        <div className="relative overflow-hidden">
                            <img
                                src={`https://images.weserv.nl/?url=${encodeURIComponent(game.image)}&w=400&h=225&fit=cover`}
                                alt={game.title}
                                className="w-full h-72 object-cover transform transition duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white text-center">{game.title}</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-lg text-gray-300 line-clamp-3">{game.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                {games.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full mx-2 transition duration-300 ${
                            index >= startIndex && index < startIndex + 3 ? 'bg-blue-500 scale-125' : 'bg-gray-500 hover:bg-gray-400'
                        }`}
                        onClick={() => setStartIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;