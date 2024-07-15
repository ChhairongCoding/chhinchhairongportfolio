import "../Body.css";

const ContactMe = () => {
  return (
    <>
      <div className="contact">
        <h1>Contact </h1>
        <h1>Get In Touch </h1>
      </div>

      <div className="message">
        <div className="txtSend">
          <h1>Send a Message</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quam
            commodi eaque eum, fugit porro quos numquam libero corporis natus
            cum ipsum maxime blanditiis dolorem explicabo, iste molestiae minus
            harum?
          </p>
          <p>
            បងប្អូនអាចទំនាក់ទំនងខ្ញុំតាម Email
            នេះបានខ្ញុំនឹងព្យាយាមឆ្លើយតបនៅពេលដែលខ្ញុំទទួលបានសារ
            កុំខ្លាចចិត្តខ្ញុំអី! ពួកយើងរីករាយនឹងបង្កើតទំនាក់ទំនងជាមួយបងប្អូន!
          </p>
        </div>
        <div className="form">
          <input type="text" />
          <br />
          <input type="text" />
          <br />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
