import { Button, Modal } from "@shopify/polaris";

function ProductModel({ active, handleChange, data }) {
    const handleChangeOfState = () => handleChange(null, false);

    const activator = <Button onClick={handleChangeOfState}>Open</Button>;

    return (
        <div style={{ height: "500px" }} className="modal">
            <Modal
                activator={activator}
                open={active}
                onClose={handleChangeOfState}
                title={data.title}
            >
                <Modal.Section>
                    <section
                        style={{
                            padding: "50px",
                            width: "100%",
                            borderBottom: "1px solid black",
                        }}
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            style={{
                                height: "250px",
                                width: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </section>
                    <section
                        style={{
                            padding: "50px",
                            marginBottom: 10,
                            borderBottom: "1px solid black",
                        }}
                    >
                        <h2 style={{ fontSize: 24, marginBottom: 10 }}>
                            A Description
                        </h2>
                        <p>{data.description}</p>
                    </section>
                    <section style={{ padding: "50px" }}>
                        <h2 style={{ fontSize: 24, marginBottom: 15 }}>
                            Rating
                        </h2>
                        <p style={{ fontSize: 16 }}>
                            <span style={{ fontWeight: 700 }}>Rating:</span>{" "}
                            {data.rate}
                        </p>
                        <p style={{ fontSize: 16 }}>
                            <span style={{ fontWeight: 700 }}>Rated By:</span>{" "}
                            {data.count} customers
                        </p>
                    </section>
                </Modal.Section>
            </Modal>
        </div>
    );
}

export default ProductModel;
