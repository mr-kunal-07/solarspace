export default function Trading() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC]">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-extrabold text-[#3B0A4F] mb-10 text-center">
                    Solar & Electrical Cables Trading
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border">
                        <h2 className="text-xl font-bold text-[#3B0A4F] mb-3">Solar Products</h2>
                        <p className="text-gray-700">
                            Wide range of solar inverters & modules from Ksolare, Growatt, Waaree,
                            RenewSys, Vikram, Adani & more. High performance & durability.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border">
                        <h2 className="text-xl font-bold text-[#3B0A4F] mb-3">Electrical Cables</h2>
                        <p className="text-gray-700">
                            We supply premium AC & DC cables for solar & electrical applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
