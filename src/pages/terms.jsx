import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#1E1E1E] text-white px-12 py-16 lg:px-24 lg:py-10">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <h2 className="text-3xl font-semibold mt-6">1.Introduction</h2>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          These terms and conditions (the "Agreement") represent a legally
          binding contract between Sortseam Digital Agency ("Sortseam," "we,"
          "our," or "us") and the client ("Client," "you," or "your") for the
          provision of digital services, including but not limited to web
          development, UI/UX design, and podcast management (collectively
          referred to as "Services").
        </p>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          By using our Services, you agree to be bound by this Agreement. Please
          read these terms and conditions carefully before using our Services.
        </p>

        <h2 className="text-3xl font-semibold mt-8">2.Services</h2>
        <h3 className="text-lg font-medium mt-3">2.1 Scope of Services</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          Sortseam will provide the Services as specified in the project
          proposal or statement of work, including but not limited to web
          development, UI/UX design, and podcast management. The specific
          details of the Services, timelines, and deliverables will be outlined
          in a separate project agreement.
        </p>
        <h3 className="text-lg font-medium mt-6">2.2 Change of Scope</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          Any changes to the scope of work or additional services requested by
          the Client will be subject to separate negotiations and agreements.
        </p>
        <h2 className="text-3xl font-semibold mt-8">3.Payments and Fees</h2>
        <h3 className="text-lg font-medium mt-3">3.1 Payment Terms</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          Client agrees to pay Sortseam according to the payment terms specified
          in the project agreement.
        </p>
        <h3 className="text-lg font-medium mt-3">3.2 Late Payments</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          In the event of late or non-payment, Sortseam reserves the right to
          suspend or terminate the Services and take appropriate legal action to
          recover outstanding fees.
        </p>

        <h2 className="text-3xl font-semibold mt-8">
          4. Intellectual Property
        </h2>
        <h3 className="text-lg font-medium mt-3">4.1 Ownership</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          All intellectual property rights related to the Services, including
          but not limited to website code, design assets, and podcast content,
          will remain with Sortseam until full payment is received.
        </p>
        <h3 className="text-lg font-medium mt-6">4.2 License</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          Upon full payment, Sortseam grants the Client a non-exclusive,
          non-transferable license to use and display the deliverables as
          specified in the project agreement.
        </p>

        <h2 className="text-3xl font-semibold mt-8">5.Confidentiality</h2>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          Both parties agree to keep any confidential information shared during
          the project confidential and not disclose it to third parties without
          written consent.
        </p>

        <h2 className="text-3xl font-semibold mt-8">6.Termination</h2>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          6.1. Either party may terminate the Services with written notice. In
          the event of termination, Client shall pay Sortseam for work completed
          up to the date of termination.
        </p>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          6.2. Sortseam may suspend or terminate Services if the Client breaches
          this Agreement or if there is non-payment for Services.
        </p>

        <h2 className="text-3xl font-semibold mt-8">
          7.Disclaimers and Limitation of Liability
        </h2>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          Sortseam shall not be liable for any indirect, incidental,
          consequential, or special damages, including loss of data, business
          interruption, or lost profits.
        </p>

        <h2 className="text-3xl font-semibold mt-8">8. Miscellaneous</h2>
        <h3 className="text-lg font-medium mt-3">8.1. Governing Law</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          This Agreement shall be governed by and construed in accordance with
          the laws of [Jurisdiction].
        </p>
        <h3 className="text-lg font-medium mt-6">8.2. Entire Agreement</h3>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          This Agreement constitutes the entire agreement between the parties
          and supersedes any prior understandings or agreements.
        </p>

        <h2 className="text-3xl font-semibold mt-8">9. Contact Information</h2>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          If you have any questions or concerns about these terms and
          conditions, please contact us at info@sortseam.com.
        </p>
        <p className="mt-4 text-sm leading-loose lg:text-base lg:w-8/12">
          By using our Services, you acknowledge that you have read, understood,
          and agreed to these terms and conditions.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
