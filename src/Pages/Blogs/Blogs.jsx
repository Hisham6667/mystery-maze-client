

const Blogs = () => {
    return (
        <div className="w-11/12 text-justify mx-auto mb-20">
            <div className="text-center text-5xl mt-10 mb-20" data-aos="zoom-in"><u>FAQs</u></div>
            <div className="my-8">
                <p className="text-3xl mb-3">
                    <span className="text-red-500">Question-1:</span> What is an access token and refresh token ? How do they work and where should we store them on the client side ?
                </p>
                <p className="text-2xl">
                    <span className="text-green-600">Answer:</span> An access token and refresh token are both used in authentication and authorization processes like in the context of web application or APIs.
                    <br />
                    <li>Access token: An access token is a credential that represents the authorization granted to a client to access certain resources or perform specific actions on behalf of the user.</li>
                    <li>Refresh Token: A refresh token is a long-lived credential used to obtain a new access token after the current access token expires.</li>
                    <li>Usage: the client includes the access token in the headers or authorization field of each request to the server hosting the protected resources.</li>
                </p>
            </div>

            <div className="my-8">
                <p className="text-3xl mb-3">
                    <span className="text-red-500">Question-2:</span> Compare SQL and NoSQL databases?
                </p>
                <p className="text-2xl">
                    <span className="text-green-600">Answer:</span> SQL database: <li>SQL databases are known as relational databases, follow a structured data model. They organize data into tables with predefined schemas, consisting of rows and columns.</li>
                    <li>These databases typically operate on a single server, known as vertical scaling.</li>
                    <br />
                    No-SQL database: 
                    <li>NoSQL databases employ a non-relational or schema-less data model. They can store data in various formats like key-value pairs, documents, wide-column stores, or graphs.</li>
                    <li>these databases, in contrast, are designed to scale horizontally, which means they can distribute the data across multiple servers.</li>
                </p>
            </div>

            <div className="my-8">
                <p className="text-3xl mb-3">
                    <span className="text-red-500">Question-3:</span> What is express js? What is Nest JS ?
                </p>
                <p className="text-2xl">
                    <span className="text-green-600">Answer:</span> Express JS: <li>ExpressJs is a lightweight and flexible web application framework.</li>
                    Nest JS: <li>NestJs is a scalable and structured framework inspired by Angular, designed for building server-side 
                    applications.</li>
                    In summery: Both frameworks have their strengths and are widely used in the Node.js ecosystem. The choice between them depends on the specific requirements and preferences of the project at hand.
                </p>
            </div>

            <div className="my-8">
                <p className="text-3xl mb-3">
                    <span className="text-red-500">Question-4:</span> What is MongoDB aggregate and how does it work ?
                </p>
                <p className="text-2xl">
                    <span className="text-green-600">Answer:</span> MongoBD aggregate and its workings:<li>MongoDBs aggregation framework is a powerful tool that allows you to perform complex data analysis and transformation operations on your data within the database. It provides a way to process and combine multiple documents, applying various stages of operations to produce aggregated results.</li>
                    <br />
                    <li>The aggregation framework works by applying a series of pipeline stages to the documents in a collection. Each stage represents an operation that modifies or processes the data in some way. The output of one stage serves as the input to the next stage, forming a chain of transformations.</li>
                </p>
            </div>

        </div>
    );
};

export default Blogs;