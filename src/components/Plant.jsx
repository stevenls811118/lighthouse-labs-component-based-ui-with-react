export default function Plant ({name, last_watered, freq_of_water, index, waterPlant}) {
    
    
    return (
        <li>
            <h3>{name}</h3>
            <p>
                {freq_of_water <= last_watered &&
                    <button onClick={() => {waterPlant(index);}}>NEEDS WATER! Water Plant!</button>}
                {freq_of_water > last_watered && 'Don\'t water yet.'}
            </p>
            <dl>
                <dt>Last Watered</dt>
                <dd>{last_watered} days ago</dd>
                <dt>Needs to be watered every</dt>
                <dd>{freq_of_water} days</dd>
            </dl>
        </li>
    );
}
