import ProduceDetails from "./ProduceDetails";
import './ProduceList.css';

const ProduceList = () => {
    const produce = {};

    const produceArr = Object.values(produce);

    return (
        <>
            <h2>All produce</h2>
            {!produceArr.length && <span>No Produce available right now.</span>}
            <ul className="produce-list">
                {produceArr.map((produce) => (
                    <ProduceDetails key={produce.id} produce={produce} />
                ))}
            </ul>
        </>
    );
};

export default ProduceList;
