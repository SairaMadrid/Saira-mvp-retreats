import { useState, useEffect } from "react";

export default function Hotels() {
    const [hotels, sethotels] = useState([]);

    useEffect(() => {
        getHotels();
    }, []);

    const getHotels = async () => {
      const response = await fetch("/api/hotels");
      const data = await response.json();
      console.log(data);
      sethotels(data);

    };
    return (
        <div>
            
        </div>
    )

    }

