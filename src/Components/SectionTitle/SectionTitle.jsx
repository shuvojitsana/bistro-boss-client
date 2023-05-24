

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="mx-auto text-center my-8 md:w-5/12">
                <p className="text-1xl text-orange-600 mb-2 ">---{subHeading}---</p>
                <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;