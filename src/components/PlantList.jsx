import plantsData from '../data/plants.json';
import { useState } from 'react';
import Plant from './Plant';

export default function PlantList () {
    const [plants, setPlants] = useState(plantsData);

    const waterPlant = (id) => {
        setPlants((prev) => {
            const newArr = [...prev];
            newArr[id].last_watered = 0;
            return newArr;
        });
    };

    return(
        <section>
            <h2>Plant List</h2>
            <ul>
                {plants.map((plant, index) => {
                    // const plantProps = {
                    //     key: index,
                    //     name: plant.name,
                    //     lastWatered: plant.last_watered,
                    //     frequency: plant.freq_of_water
                    // };
                    const plantProps = {...plant, key: index, index, waterPlant};
                    return <Plant {...plantProps} />;
                })}
            </ul>
        </section>
    );
}
